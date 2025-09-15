"use client";
import React from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Leaf,
  Award,
  Truck,
  Star,
} from "lucide-react";

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full Width Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=1080&fit=crop"
            alt="Virgin Islands Farm"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 via-green-700/80 to-green-900/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-green-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-green-500/15 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-8">
                <Leaf className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-green-100 font-medium">
                  Supporting Virgin Islands Agriculture
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-white">Fresh.</span>
                <span className="block text-green-200">Local.</span>
                <span className="block bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                  Connected.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl mb-12 text-green-100 max-w-4xl mx-auto leading-relaxed">
                The premier platform connecting Virgin Islands farmers with
                restaurants, bakeries, and food businesses. Get the freshest
                local produce while supporting our community and reducing food
                imports.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    150+
                  </div>
                  <div className="text-green-200 text-sm">Local Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    500+
                  </div>
                  <div className="text-green-200 text-sm">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    25%
                  </div>
                  <div className="text-green-200 text-sm">Import Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    4.8★
                  </div>
                  <div className="text-green-200 text-sm">Rating</div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button
                  onClick={() => setActiveTab("marketplace")}
                  className="group relative bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Browse Marketplace
                    <ShoppingCart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </span>
                </button>

                <button className="group relative border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-w-[200px]">
                  <span className="relative z-10 flex items-center justify-center">
                    Join as Farmer
                    <Leaf className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-green-200">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  <span className="text-sm">Certified Organic Farms</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  <span className="text-sm">Same-Day Delivery</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 fill-current text-yellow-400" />
                  <span className="text-sm">Rated by Local Businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cultiv8VI?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy for restaurants, bakeries, and food
              businesses to source fresh, local produce directly from Virgin
              Islands farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Local</h3>
              <p className="text-gray-600">
                All produce sourced directly from Virgin Islands farmers,
                ensuring maximum freshness and supporting local agriculture.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day or next-day delivery available across all Virgin
                Islands with flexible pickup options.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Rated farmers and real customer reviews ensure you get the
                highest quality produce every time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
              <div className="text-green-200">Local Farmers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-green-200">Businesses Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25%</div>
              <div className="text-green-200">Import Reduction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.8★</div>
              <div className="text-green-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;