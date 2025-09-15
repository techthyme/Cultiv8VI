"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Star, Phone, Mail, Award, Loader } from "lucide-react";
import { useFarms } from "@/hooks/useFarms";

const FarmersPage: React.FC = () => {
  // Fetch farms data
  const { farms, isLoading, isError } = useFarms();
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

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center space-x-2 text-green-600">
              <Loader className="h-6 w-6 animate-spin" />
              <span>Loading farms...</span>
            </div>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-12">
            <div className="text-red-500 text-lg mb-4">
              Failed to load farms data. Please try again.
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Retry
            </button>
          </div>
        )}

        {/* Farms Grid */}
        {!isLoading && !isError && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farms.map((farm) => (
              <div
                key={farm.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
              >
                <Image
                  src={farm.image}
                  alt={farm.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {farm.name}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{farm.location}</span>
                      </div>
                    </div>
                    {farm.certified && (
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
                            star <= Math.floor(farm.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {farm.rating} rating
                    </span>
                  </div>

                  {/* Farm Description */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {farm.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {farm.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product Count */}
                  <div className="mb-4 text-sm text-gray-500">
                    {farm.products?.length || 0} products available
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-sm font-medium">
                      View Products ({farm.products?.length || 0})
                    </button>
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                      title={`Call ${farm.contact?.phone || "farm"}`}
                    >
                      <Phone className="h-4 w-4" />
                    </button>
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300"
                      title={`Email ${farm.contact?.email || "farm"}`}
                    >
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Results Count */}
        {!isLoading && !isError && farms.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            Showing {farms.length} farms
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmersPage;
