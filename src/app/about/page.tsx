'use client'

import {
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const stats = [
  { label: 'Active Farmers', value: '50+' },
  { label: 'Restaurant Partners', value: '100+' },
  { label: 'Islands Served', value: '3' },
  { label: 'Local Sourcing Increase', value: '85%' },
]

const values = [
  {
    name: 'Community First',
    description: 'We believe in strengthening our local agricultural community by connecting farmers directly with businesses across the Virgin Islands.',
    icon: UserGroupIcon,
  },
  {
    name: 'Sustainability',
    description: 'Supporting sustainable farming practices and reducing the environmental impact of food transportation throughout the Caribbean.',
    icon: SunIcon,
  },
  {
    name: 'Quality Focus',
    description: 'Ensuring the highest quality, freshest produce reaches local businesses and ultimately, consumers across the USVI.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Fair Trade',
    description: 'Ensuring farmers receive fair compensation while businesses get competitive pricing on fresh, locally-grown produce.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Innovation',
    description: 'Leveraging technology to simplify the connection between Virgin Islands farmers and food businesses.',
    icon: SparklesIcon,
  },
]

const team = [
  {
    name: 'Maria Santos',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'St. Thomas, USVI',
  },
  {
    name: 'James Peterson',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'St. Croix, USVI',
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Farm Liaison Coordinator',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'St. John, USVI',
  },
  {
    name: 'Sarah Williams',
    role: 'Supply Chain Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'St. Thomas, USVI',
  },
  {
    name: 'David Thompson',
    role: 'Agricultural Technology Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'St. Croix, USVI',
  },
  {
    name: 'Lisa Chen',
    role: 'Business Development',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'St. Thomas, USVI',
  },
]

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  'Health and wellness benefits',
  'Professional development opportunities',
  'Support for local community initiatives',
  'Beautiful Virgin Islands work environment',
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="relative isolate">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1108/632 w-277 flex-none bg-gradient-to-r from-[#80caff] to-[#22c55e] opacity-25"
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-2 lg:px-8">
          <div className="mx-auto max-w-2xl pt-4 text-center sm:pt-6">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Cultivating Virgin Islands agriculture
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We connect local farmers directly with restaurants, bakeries, and food businesses across St. Thomas, St. John, and St. Croix, creating a sustainable farm-to-table ecosystem that supports our community.
            </p>
            
            {/* Hero Images */}
            <div className="mt-8 sm:mt-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
                {/* Left Image */}
                <div className="hidden lg:block lg:w-80">
                  <div className="aspect-9/4 bg-gray-400 rounded-3xl outline-1 -outline-offset-1 outline-black/10 w-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">Left Image Placeholder</span>
                  </div>
                </div>
                
                {/* Center Image (Chef) - Original Size */}
                <div className="max-w-4xl flex-shrink-0">
                  <img
                    alt="Virgin Islands farmers working in agricultural fields"
                    src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=2894&h=1600&fit=crop"
                    className="aspect-9/4 w-full object-cover outline-1 -outline-offset-1 outline-black/5 rounded-3xl"
                  />
                </div>
                
                {/* Right Image */}
                <div className="hidden lg:block lg:w-80">
                  <div className="aspect-9/4 bg-gray-400 rounded-3xl outline-1 -outline-offset-1 outline-black/10 w-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm font-medium">Right Image Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-600 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Cultiv8VI was born from a simple yet powerful vision: to create a thriving marketplace that connects 
                  local Virgin Islands farmers directly with restaurants, bakeries, and food businesses throughout the territory. 
                  We believe that by shortening the supply chain, we can provide fresher produce to businesses while ensuring 
                  farmers receive fair compensation for their hard work.
                </p>
                <p className="mt-8">
                  Our platform makes it easy for both sides to connect, communicate, and build lasting partnerships. 
                  By eliminating intermediaries, we create a more sustainable and profitable ecosystem for everyone involved 
                  in the Virgin Islands food system.
                </p>
              </div>
              <div>
                <p>
                  From small family farms in Cruz Bay to established agricultural operations in Frederiksted, we provide 
                  the digital infrastructure needed to foster direct relationships, fair pricing, and sustainable business 
                  growth across all three major islands.
                </p>
                <p className="mt-8">
                  Our mission is to build a sustainable agricultural ecosystem in the US Virgin Islands that supports 
                  local economic growth while delivering the freshest possible produce to Caribbean cuisine. We believe 
                  that strong local food systems are the foundation of community resilience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Green Background - Full Width */}
        <div className="mt-16 sm:mt-20 lg:mt-28 bg-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-green-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our values</h2>
            <p className="mt-6 text-lg/8 text-gray-700">
              The principles that guide everything we do in building Virgin Islands' premier agricultural marketplace.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <value.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-green-600" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our team</h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We're a passionate group of Virgin Islands natives and Caribbean agriculture advocates dedicated to 
              supporting local farmers and strengthening our food system.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-14/13 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base/7 text-gray-600">{person.role}</p>
                <p className="text-sm/6 text-green-600">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/75 px-6 py-16 shadow-lg ring-1 ring-gray-900/5 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                alt="Virgin Islands agricultural landscape"
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=800&fit=crop"
                className="h-96 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
                  Join our mission
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-gray-600">
                  Help us strengthen Virgin Islands agriculture by connecting local farmers with restaurants and food 
                  businesses. Together, we can build a more sustainable and prosperous food system.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-950 sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-green-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <a href="#" className="text-sm/6 font-semibold text-green-600 hover:text-green-500">
                    See our job postings
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-1318/752 w-329.5 flex-none bg-gradient-to-r from-[#9fd6fc] to-[#34d399] opacity-50"
            />
          </div>
        </div>
      </main>
    </div>
  )
}