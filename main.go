package main

import (
	"fmt"
	"image"
	"image/jpeg"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"

	"golang.org/x/image/draw"
)

const (
	targetSize    = 24 * 1024 // 24KB in bytes
	aspectRatio   = 4.0 / 3.0
	initialWidth  = 800
	initialHeight = 600
	qualityStep   = 5
	minQuality    = 10
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <input_folder> [output_folder]")
		fmt.Println("Example: go run main.go ./images ./output")
		os.Exit(1)
	}

	inputFolder := os.Args[1]
	outputFolder := "./output"
	if len(os.Args) >= 3 {
		outputFolder = os.Args[2]
	}

	// Create output folder if it doesn't exist
	if err := os.MkdirAll(outputFolder, 0755); err != nil {
		fmt.Printf("Error creating output folder: %v\n", err)
		os.Exit(1)
	}

	// Read all files in the input folder
	files, err := ioutil.ReadDir(inputFolder)
	if err != nil {
		fmt.Printf("Error reading input folder: %v\n", err)
		os.Exit(1)
	}

	processedCount := 0
	for _, file := range files {
		if file.IsDir() {
			continue
		}

		inputPath := filepath.Join(inputFolder, file.Name())
		ext := strings.ToLower(filepath.Ext(file.Name()))

		// Check if it's an image file
		if ext != ".jpg" && ext != ".jpeg" && ext != ".png" {
			continue
		}

		fmt.Printf("Processing: %s\n", file.Name())

		outputFileName := strings.TrimSuffix(file.Name(), ext) + ".jpg"
		outputPath := filepath.Join(outputFolder, outputFileName)

		if err := processImage(inputPath, outputPath); err != nil {
			fmt.Printf("  Error: %v\n", err)
			continue
		}

		processedCount++
	}

	fmt.Printf("\nProcessed %d images successfully!\n", processedCount)
}

func processImage(inputPath, outputPath string) error {
	// Open and decode the image
	file, err := os.Open(inputPath)
	if err != nil {
		return fmt.Errorf("failed to open image: %v", err)
	}
	defer file.Close()

	img, _, err := image.Decode(file)
	if err != nil {
		return fmt.Errorf("failed to decode image: %v", err)
	}

	// Resize to 4:3 aspect ratio
	resized := resizeToAspectRatio(img, initialWidth, initialHeight)

	// Compress to target size
	if err := compressToSize(resized, outputPath, targetSize); err != nil {
		return fmt.Errorf("failed to compress image: %v", err)
	}

	// Get final file size
	fileInfo, _ := os.Stat(outputPath)
	fmt.Printf("  Output: %s (%.2f KB)\n", filepath.Base(outputPath), float64(fileInfo.Size())/1024)

	return nil
}

func resizeToAspectRatio(img image.Image, targetWidth, targetHeight int) image.Image {
	bounds := img.Bounds()
	srcWidth := bounds.Dx()
	srcHeight := bounds.Dy()

	// Calculate the dimensions to maintain 4:3 aspect ratio
	srcAspect := float64(srcWidth) / float64(srcHeight)

	var newWidth, newHeight int
	if srcAspect > aspectRatio {
		// Image is wider than 4:3
		newHeight = targetHeight
		newWidth = int(float64(targetHeight) * aspectRatio)
	} else {
		// Image is taller than 4:3
		newWidth = targetWidth
		newHeight = int(float64(targetWidth) / aspectRatio)
	}

	// Create new image with target dimensions
	dst := image.NewRGBA(image.Rect(0, 0, newWidth, newHeight))

	// Use Catmull-Rom interpolation for high-quality resizing
	draw.CatmullRom.Scale(dst, dst.Bounds(), img, img.Bounds(), draw.Over, nil)

	return dst
}

func compressToSize(img image.Image, outputPath string, targetSize int) error {
	quality := 85 // Start with high quality

	for quality >= minQuality {
		// Create temporary file
		tmpFile, err := os.CreateTemp("", "img_*.jpg")
		if err != nil {
			return err
		}
		tmpPath := tmpFile.Name()

		// Encode with current quality
		options := &jpeg.Options{Quality: quality}
		if err := jpeg.Encode(tmpFile, img, options); err != nil {
			tmpFile.Close()
			os.Remove(tmpPath)
			return err
		}
		tmpFile.Close()

		// Check file size
		fileInfo, err := os.Stat(tmpPath)
		if err != nil {
			os.Remove(tmpPath)
			return err
		}

		fileSize := int(fileInfo.Size())

		// If size is acceptable, move to final destination
		if fileSize <= targetSize || quality <= minQuality {
			if err := os.Rename(tmpPath, outputPath); err != nil {
				// If rename fails, try copy
				if copyErr := copyFile(tmpPath, outputPath); copyErr != nil {
					os.Remove(tmpPath)
					return copyErr
				}
				os.Remove(tmpPath)
			}
			return nil
		}

		// Remove temp file and try with lower quality
		os.Remove(tmpPath)
		quality -= qualityStep
	}

	return fmt.Errorf("could not compress to target size")
}

func copyFile(src, dst string) error {
	data, err := ioutil.ReadFile(src)
	if err != nil {
		return err
	}
	return ioutil.WriteFile(dst, data, 0644)
}
