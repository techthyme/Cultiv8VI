"use client";
import { FC, Fragment, useState } from "react";
import { Farm } from "@/types";
import Grid from "@/components/ui/grid";
import Link from "next/link";
import { Star, MapPin } from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import { StarIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { mockProducts } from "@/data"

interface FarmersClientProps {
  farms: Farm[];
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const FarmersClient: FC<FarmersClientProps> = ({ farms }) => {
  console.log("Products in FarmersClient", farms);
  const [open, setOpen] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const renderDetailStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={classNames(
          rating > i ? 'text-yellow-400' : 'text-gray-200',
          'h-5 w-5 flex-shrink-0'
        )}
        aria-hidden="true"
      />
    ))
  }

  // If only one farm, show detailed view
  if (farms.length === 1) {
    const farm = farms[0];
    const farmProducts = mockProducts.filter(product => product.farmId === farm.id)

    return (
      <div className="bg-white">
        {/* Mobile menu */}
        <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="pt-10 sm:pt-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <Link href="/farms" className="mr-2 text-sm font-medium text-gray-900">
                    Farms
                  </Link>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <span className="font-medium text-gray-500">{farm.name}</span>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
            <img
              alt={farm.name}
              src={farm.images[0]}
              className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
            />
            {farm.images[1] && (
              <img
                alt={farm.name}
                src={farm.images[1]}
                className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
              />
            )}
            {farm.images[1] && (
              <img
                alt={farm.name}
                src={farm.images[1]}
                className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
              />
            )}
            <img
              alt={farm.name}
              src={farm.coverImage || farm.images[0]}
              className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
            />
          </div>

          {/* Farm info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{farm.name}</h1>
            </div>

            {/* Farm details */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Farm information</h2>
              
              {/* Rating */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {renderDetailStars(farm.rating)}
                  </div>
                  <p className="sr-only">{farm.rating} out of 5 stars</p>
                  <span className="ml-3 text-sm font-medium text-gray-600">
                    {farm.rating} ({farm.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Location</h3>
                <div className="mt-2 flex items-start text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>{farm.address.street}</p>
                    <p>{farm.address.city}, {farm.address.state} {farm.address.zipCode}</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Contact</h3>
                <div className="mt-2 space-y-2">
                  {farm.contact?.phone && (
                    <div className="flex items-center text-gray-600">
                      <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{farm.contact.phone}</span>
                    </div>
                  )}
                  {farm.contact?.email && (
                    <div className="flex items-center text-gray-600">
                      <EnvelopeIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{farm.contact.email}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Specialties */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Specialties</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {farm.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {farm.certified && (
                <div className="mt-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-6 w-6 rounded-full bg-green-600 flex items-center justify-center">
                          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">Certified Organic Farm</p>
                        <p className="text-sm text-green-600">This farm meets organic certification standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{farm.description}</p>
                </div>
              </div>

              {farm.seasonalInfo && (
                <section className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Seasonal Information</h2>
                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{farm.seasonalInfo}</p>
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Farm Products */}
          {farmProducts.length > 0 && (
            <section aria-labelledby="farm-products-heading" className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 id="farm-products-heading" className="text-xl font-bold tracking-tight text-gray-900">
                  Products from {farm.name}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {farmProducts.map((product) => (
                    <div key={product.id} className="group relative">
                      <img
                        alt={product.name}
                        src={product.primaryImage}
                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                      />
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <Link href={`/market/${product.id}`}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    );
  }

  // Multiple farms - show grid view
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Virgin Islands Farms
          </h1>
          <p className="text-gray-600">
            Discover local farms and connect with Virgin Islands farmers
          </p>
        </div>
        
        <Grid>
          {farms.map((farm) => (
            <div
              key={farm.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  alt={farm.name}
                  src={farm.images[0]}
                  className="aspect-square w-full object-cover"
                />
                {farm.certified && (
                  <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Certified
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {farm.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {renderStars(farm.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {farm.rating} ({farm.reviewCount} reviews)
                  </span>
                </div>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">
                    {farm.address.city}, {farm.address.state}
                  </span>
                </div>
                
                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {farm.specialties.slice(0, 2).map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {farm.specialties.length > 2 && (
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{farm.specialties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* View Farm Button */}
                <Link
                  href={`/farms/${farm.id}`}
                  className="block w-full bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  View Farm
                </Link>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default FarmersClient;
