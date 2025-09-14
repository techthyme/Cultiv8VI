export interface Produce {
  id: number;
  name: string;
  description: string;
  farmer: string;
  farmerLocation: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
  category: string;
  inSeason: boolean;
  organic: boolean;
  harvestDate: string;
}