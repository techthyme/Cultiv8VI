'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/20/solid'

const filters = {
  price: [
    { value: '0', label: '$0 - $5', checked: false },
    { value: '5', label: '$5 - $10', checked: false },
    { value: '10', label: '$10 - $15', checked: false },
    { value: '15', label: '$15+', checked: false },
  ],
  category: [
    { value: 'vegetables', label: 'Vegetables', checked: false },
    { value: 'fruits', label: 'Fruits', checked: true },
    { value: 'herbs', label: 'Herbs & Spices', checked: false },
    { value: 'leafy-greens', label: 'Leafy Greens', checked: false },
    { value: 'root-vegetables', label: 'Root Vegetables', checked: false },
  ],
  location: [
    { value: 'st-thomas', label: 'St. Thomas', checked: false },
    { value: 'st-john', label: 'St. John', checked: false },
    { value: 'st-croix', label: 'St. Croix', checked: false },
  ],
  organic: [
    { value: 'certified-organic', label: 'Certified Organic', checked: false },
    { value: 'naturally-grown', label: 'Naturally Grown', checked: false },
    { value: 'pesticide-free', label: 'Pesticide Free', checked: false },
  ],
}

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Best Rating', href: '#', current: false },
]

const products = [
  {
    id: 1,
    name: 'Organic Tomatoes (2 lbs)',
    price: '$8',
    rating: 5,
    reviewCount: 24,
    imageSrc: 'https://images.unsplash.com/photo-1546470427-e9169bb0d6a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh organic tomatoes from Virgin Islands farms',
    href: '#',
    farmer: 'Green Valley Farm',
    location: 'St. Thomas',
  },
  {
    id: 2,
    name: 'Fresh Lettuce Head',
    price: '$4',
    rating: 5,
    reviewCount: 18,
    imageSrc: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Crisp lettuce heads grown locally',
    href: '#',
    farmer: 'Island Fresh Gardens',
    location: 'St. John',
  },
  {
    id: 3,
    name: 'Caribbean Peppers Mix',
    price: '$6',
    rating: 5,
    reviewCount: 31,
    imageSrc: 'https://images.unsplash.com/photo-1583328651071-c2980b5c70e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Colorful mix of Caribbean hot peppers',
    href: '#',
    farmer: 'Spice Island Farm',
    location: 'St. Croix',
  },
  {
    id: 4,
    name: 'Fresh Plantains (bunch)',
    price: '$5',
    rating: 4,
    reviewCount: 15,
    imageSrc: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Ripe plantains ready for cooking',
    href: '#',
    farmer: 'Tropical Harvest',
    location: 'St. Thomas',
  },
  {
    id: 5,
    name: 'Organic Basil Bundle',
    price: '$3',
    rating: 5,
    reviewCount: 27,
    imageSrc: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh basil herbs bundled',
    href: '#',
    farmer: 'Herb Paradise',
    location: 'St. John',
  },
  {
    id: 6,
    name: 'Sweet Potatoes (3 lbs)',
    price: '$7',
    rating: 5,
    reviewCount: 19,
    imageSrc: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Orange sweet potatoes from local farms',
    href: '#',
    farmer: 'Mountain View Farm',
    location: 'St. Croix',
  },
  {
    id: 7,
    name: 'Fresh Mangoes (4 count)',
    price: '$12',
    rating: 5,
    reviewCount: 42,
    imageSrc: 'https://images.unsplash.com/photo-1553279431-d271bb29f835?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Ripe tropical mangoes',
    href: '#',
    farmer: 'Paradise Fruit Co',
    location: 'St. Thomas',
  },
  {
    id: 8,
    name: 'Mixed Greens Salad Pack',
    price: '$6',
    rating: 4,
    reviewCount: 33,
    imageSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh mixed greens for salad',
    href: '#',
    farmer: 'Coastal Gardens',
    location: 'St. John',
  },
  {
    id: 9,
    name: 'Coconuts (fresh, 3 count)',
    price: '$9',
    rating: 5,
    reviewCount: 16,
    imageSrc: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh coconuts with water',
    href: '#',
    farmer: 'Caribbean Coconut Co',
    location: 'St. Croix',
  },
  {
    id: 10,
    name: 'Okra (1 lb)',
    price: '$4',
    rating: 4,
    reviewCount: 21,
    imageSrc: 'https://images.unsplash.com/photo-1589621316382-008455b857cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh okra pods',
    href: '#',
    farmer: 'Sunny Slope Farm',
    location: 'St. Thomas',
  },
  {
    id: 11,
    name: 'Callaloo Greens Bundle',
    price: '$5',
    rating: 5,
    reviewCount: 28,
    imageSrc: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Traditional callaloo greens',
    href: '#',
    farmer: 'Heritage Gardens',
    location: 'St. John',
  },
  {
    id: 12,
    name: 'Breadfruit (medium)',
    price: '$8',
    rating: 4,
    reviewCount: 12,
    imageSrc: 'https://images.unsplash.com/photo-1566843071792-09208d62b2c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Fresh breadfruit from Caribbean farms',
    href: '#',
    farmer: 'Island Traditions',
    location: 'St. Croix',
  },
]

function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function MarketPage() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Fresh Local Produce
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-500">
          Discover the freshest produce from Virgin Islands farms. Support local agriculture while getting the highest quality ingredients for your restaurant or business.
        </p>
      </div>

      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center border-t border-b border-gray-200"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div className="pr-6">
              <DisclosureButton className="group flex items-center font-medium text-gray-700">
                <FunnelIcon
                  aria-hidden="true"
                  className="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
                />
                Filters
              </DisclosureButton>
            </div>
            <div className="pl-6">
              <button type="button" className="text-gray-500">
                Clear all
              </button>
            </div>
          </div>
        </div>
        <DisclosurePanel className="border-t border-gray-200 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Price</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.price.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`price-${optionIdx}`}
                            name="price[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={`price-${optionIdx}`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Category</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.category.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`category-${optionIdx}`}
                            name="category[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={`category-${optionIdx}`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block font-medium">Location</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.location.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`location-${optionIdx}`}
                            name="location[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={`location-${optionIdx}`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="block font-medium">Growing Method</legend>
                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                  {filters.organic.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`organic-${optionIdx}`}
                            name="organic[]"
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-green-600 checked:bg-green-600 indeterminate:border-green-600 indeterminate:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label htmlFor={`organic-${optionIdx}`} className="text-base text-gray-600 sm:text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </DisclosurePanel>
        <div className="col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block">
              <div className="flex">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      <a
                        href={option.href}
                        className={classNames(
                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                          'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                        )}
                      >
                        {option.name}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </Disclosure>

      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75 transition-opacity"
              />
              <div className="pt-6 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                
                <div className="mt-2">
                  <p className="text-xs text-green-600 font-medium">{product.farmer}</p>
                  <p className="text-xs text-gray-400">{product.location}</p>
                </div>

                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'size-4 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{product.reviewCount} reviews</p>
                </div>
                <p className="mt-4 text-base font-semibold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}