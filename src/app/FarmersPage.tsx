"use client";
import React from "react";
import {
  MapPin,
  Star,
  Phone,
  Mail,
  Award,
} from "lucide-react";

interface Farmer {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  certified: boolean;
  specialties: string[];
}

interface FarmersPageProps {
  farmers: Farmer[];
}

const FarmersPage: React.FC<FarmersPageProps> = ({ farmers }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Our Partner Farmers
          </h1>
          <p className="text-lg text-gray-600">
            Meet the dedicated farmers growing fresh produce across the Virgin
            Islands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.map((farmer) => (
            <div
              key={farmer.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
            >
              <img
                src={farmer.image}
                alt={farmer.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {farmer.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{farmer.location}</span>
                    </div>
                  </div>
                  {farmer.certified && (
                    <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      <Award className="h-3 w-3 mr-1" />
                      Certified
                    </div>
                  )}
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.floor(farmer.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {farmer.rating} rating
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {farmer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-sm font-medium">
                    View Products
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmersPage;