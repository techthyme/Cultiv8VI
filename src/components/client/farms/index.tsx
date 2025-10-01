"use client";
import { FC, Fragment, useState } from "react";
import { Farm } from "@/types";
import Grid from "@/components/ui/grid";
import Link from "next/link";
import { Star, MapPin, Clock, Truck, CreditCard, Calendar, Award, Globe, Users, Leaf } from "lucide-react";
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
            {farm.images[2] && (
              <img
                alt={farm.name}
                src={farm.images[2]}
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
                    {farm.locationName && (
                      <p className="text-xs text-gray-500 mt-1">{farm.locationName}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Farm History */}
              {farm.createdAt && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900">Established</h3>
                  <div className="mt-2 flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm">
                      {new Date(farm.createdAt).getFullYear()}
                      {farm.createdAt && (
                        <span className="text-gray-500 ml-1">
                          ({new Date().getFullYear() - new Date(farm.createdAt).getFullYear()} years in operation)
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              )}

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


              {/* Operating Hours */}
              {farm.operatingHours && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Operating Hours</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2">
                      {Object.entries(farm.operatingHours).map(([day, hours]) => {
                        if (!hours) return null;
                        const dayName = day.charAt(0).toUpperCase() + day.slice(1);
                        return (
                          <div key={day} className="flex justify-between items-center text-sm">
                            <span className="font-medium text-gray-900">{dayName}</span>
                            <span className="text-gray-600">
                              {hours.closed ? (
                                <span className="text-red-600">Closed</span>
                              ) : (
                                `${hours.open} - ${hours.close}`
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Delivery Options */}
              {farm.deliveryOptions && farm.deliveryOptions.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Delivery Options</h3>
                  <div className="space-y-2">
                    {farm.deliveryOptions.map((option, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Truck className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        <span className="capitalize">
                          {option.replace('_', ' ').toLowerCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Methods */}
              {farm.paymentMethods && farm.paymentMethods.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Payment Methods</h3>
                  <div className="space-y-2">
                    {farm.paymentMethods.map((method, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CreditCard className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        <span className="capitalize">
                          {method.replace('_', ' ').toLowerCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Minimum Order */}
              {farm.minimumOrder && (
                <div className="mt-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">$</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-blue-800">Minimum Order</p>
                        <p className="text-sm text-blue-600">${farm.minimumOrder} minimum for delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Website & Social Media */}
              {(farm.contact?.website || farm.contact?.socialMedia) && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Online Presence</h3>
                  <div className="space-y-2">
                    {farm.contact?.website && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Globe className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        <a 
                          href={farm.contact.website.startsWith('http') ? farm.contact.website : `https://${farm.contact.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-700 underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                    {farm.contact?.socialMedia?.facebook && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                        <a 
                          href={`https://facebook.com/${farm.contact.socialMedia.facebook.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 underline"
                        >
                          {farm.contact.socialMedia.facebook}
                        </a>
                      </div>
                    )}
                    {farm.contact?.socialMedia?.instagram && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-pink-600 flex-shrink-0" />
                        <a 
                          href={`https://instagram.com/${farm.contact.socialMedia.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-700 underline"
                        >
                          {farm.contact.socialMedia.instagram}
                        </a>
                      </div>
                    )}
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

              {/* Certifications - Moved from sidebar */}
              {farm.certifications && farm.certifications.length > 0 && (
                <section className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900 mb-4">Farm Certifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {farm.certifications.map((cert, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <Award className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-green-800">{cert.name}</p>
                            <p className="text-xs text-green-600 mt-1">{cert.issuingBody}</p>
                            {cert.expiryDate && (
                              <p className="text-xs text-gray-500 mt-1">
                                Valid until: {new Date(cert.expiryDate).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Virgin Islands Farming Practices */}
              <section className="mt-10">
                <h2 className="text-sm font-medium text-gray-900 mb-4">Virgin Islands Farming Practices</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="flex items-center text-sm font-medium text-blue-900 mb-3">
                        <Leaf className="h-4 w-4 mr-2" />
                        Sustainability Practices
                      </h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Rainwater harvesting systems</li>
                        <li>• Natural composting methods</li>
                        <li>• Hurricane-resistant crop selection</li>
                        <li>• Solar-powered irrigation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="flex items-center text-sm font-medium text-blue-900 mb-3">
                        <Users className="h-4 w-4 mr-2" />
                        Community Programs
                      </h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• School garden education</li>
                        <li>• Farming apprenticeships</li>
                        <li>• Heritage seed preservation</li>
                        <li>• Farm-to-table events</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Island Agriculture Heritage */}
              <section className="mt-10">
                <h2 className="text-sm font-medium text-gray-900 mb-4">Virgin Islands Agricultural Heritage</h2>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-amber-800 leading-relaxed">
                        This farm continues the rich agricultural tradition of the Virgin Islands, 
                        preserving traditional Caribbean farming methods while adapting to modern 
                        sustainable practices. Our crops are selected for their ability to thrive 
                        in the tropical climate and hurricane conditions unique to the VI.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
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
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
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
              
              <div className="p-4 flex flex-col flex-grow">
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
                
                {/* Spacer to push button to bottom */}
                <div className="flex-grow"></div>
                
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
