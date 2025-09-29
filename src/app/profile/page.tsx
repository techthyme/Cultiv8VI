"use client";
import { useState } from "react";

// Mock farmer profile data
const farmerProfile = {
  user: {
    email: "maria@greenvalleyfarm.vi",
    phone: "(340) 555-0123"
  },
  bio: "Passionate organic farmer dedicated to sustainable agriculture practices in the Virgin Islands. Specializing in heirloom vegetables, tropical fruits, and herbs grown with love and care for our local community.",
  name: "Maria Rodriguez",
  avatarUrl: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=120&h=120&fit=crop&crop=face",
  profession: "Organic Farmer & Agricultural Educator",
  organization: "Green Valley Farm",
  farmDetails: {
    farmName: "Green Valley Farm",
    location: "St. Thomas, USVI",
    farmSize: "15 acres",
    farmingMethod: "Organic",
    certifications: ["USVI Organic Certification", "GAP Certified"],
    establishedYear: "1985",
    specialties: ["Heirloom Vegetables", "Tropical Fruits", "Herbs"]
  },
  events: [
    {
      title: "Farmers Market - Charlotte Amalie",
      location: "Vendor Plaza, St. Thomas",
      time: "6:00 AM - 12:00 PM",
      canAttend: true
    },
    {
      title: "Restaurant Delivery - Sunset Grille",
      location: "St. Thomas",
      time: "2:00 PM - 3:00 PM",
      canAttend: true
    },
    {
      title: "Farm Tour - Local Schools",
      location: "Green Valley Farm",
      time: "4:00 PM - 5:30 PM",
      canAttend: false
    }
  ]
};

// Mock produce listings data
const mockProduceListings = [
  {
    id: "1",
    name: "Organic Heirloom Tomatoes",
    image: "https://images.unsplash.com/photo-1546470427-e9169bb0d6a6?w=400&h=300&fit=crop",
    category: "Vegetables",
    pricePerUnit: 8.00,
    unit: "lb",
    quantity: 45,
    availability: "In Stock",
    harvestDate: "2024-09-28",
    description: "Fresh vine-ripened heirloom tomatoes in various colors"
  },
  {
    id: "2",
    name: "Fresh Basil",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf93b6?w=400&h=300&fit=crop",
    category: "Herbs",
    pricePerUnit: 3.50,
    unit: "bunch",
    quantity: 20,
    availability: "In Stock",
    harvestDate: "2024-09-29",
    description: "Aromatic sweet basil perfect for cooking"
  },
  {
    id: "3",
    name: "Virgin Islands Mangoes",
    image: "https://images.unsplash.com/photo-1553279968-db4ac8c5f862?w=400&h=300&fit=crop",
    category: "Fruits",
    pricePerUnit: 12.00,
    unit: "box",
    quantity: 8,
    availability: "Low Stock",
    harvestDate: "2024-09-27",
    description: "Sweet tropical mangoes from our heritage trees"
  },
  {
    id: "4",
    name: "Organic Lettuce Mix",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop",
    category: "Vegetables",
    pricePerUnit: 6.00,
    unit: "bag",
    quantity: 0,
    availability: "Out of Stock",
    harvestDate: "2024-09-26",
    description: "Mixed greens including arugula, spinach, and lettuce"
  }
];

interface Profile {
  user: {
    email: string;
    phone: string;
  };
  bio: string;
  name: string;
  avatarUrl: string;
  profession: string;
  organization: string;
  farmDetails: {
    farmName: string;
    location: string;
    farmSize: string;
    farmingMethod: string;
    certifications: string[];
    establishedYear: string;
    specialties: string[];
  };
  events: Array<{
    title: string;
    location: string;
    time: string;
    canAttend: boolean;
  }>;
}

interface ProduceListing {
  id: string;
  name: string;
  image: string;
  category: string;
  pricePerUnit: number;
  unit: string;
  quantity: number;
  availability: string;
  harvestDate: string;
  description: string;
}

export default function FarmerProfile({ profile = farmerProfile }: { profile?: Profile }) {
  const { user, bio, name, avatarUrl, profession, organization, farmDetails, events } = profile;
  const [activeTab, setActiveTab] = useState("overview");
  const [produceListings, setProduceListings] = useState<ProduceListing[]>(mockProduceListings);
  const [editingProduce, setEditingProduce] = useState<ProduceListing | null>(null);
  const [editedProfile, setEditedProfile] = useState(profile);

  return (
    <main className="relative overflow-hidden bg-green-50">
      {/* Agricultural background effect */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Farmer Profile & Dashboard
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <nav className="flex space-x-8 justify-center">
              {[
                { id: "overview", label: "Overview", icon: "👨‍🌾" },
                { id: "profile", label: "Edit Profile", icon: "✏️" },
                { id: "produce", label: "Produce Listings", icon: "🥕" },
                { id: "inventory", label: "Inventory", icon: "📦" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-700 hover:bg-green-50"
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Summary Card */}
              <div className="lg:col-span-1">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 p-8 shadow-sm">
                  <div className="text-center mb-8">
                    <div className="relative inline-block mb-4">
                      <img
                        src={avatarUrl}
                        alt={name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
                    <p className="text-green-600 font-medium mb-1">{organization}</p>
                    <p className="text-gray-600">{profession}</p>
                  </div>

                  {/* Farm Details */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Farm Details</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Location:</span> {farmDetails.location}</div>
                      <div><span className="font-medium">Size:</span> {farmDetails.farmSize}</div>
                      <div><span className="font-medium">Method:</span> {farmDetails.farmingMethod}</div>
                      <div><span className="font-medium">Established:</span> {farmDetails.establishedYear}</div>
                    </div>
                    
                    <div className="mt-4">
                      <span className="font-medium text-sm">Specialties:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {farmDetails.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Today's Farm Activities */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Today&apos;s Farm Activities</h3>
                  {events && events.length > 0 ? (
                    <div className="space-y-4">
                      {events.map((event, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{event.title}</h4>
                              <p className="text-sm text-gray-600">{event.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">{event.time}</p>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${event.canAttend ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                              {event.canAttend ? "Available" : "Busy"}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h4 className="text-lg font-medium text-gray-900 mb-2">No farm activities today</h4>
                      <p className="text-gray-600">Perfect day to plan your next harvest!</p>
                    </div>
                  )}
                </div>

                {/* Farm Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">This Month</p>
                        <p className="text-2xl font-bold text-gray-900">850</p>
                        <p className="text-sm text-gray-600">Pounds Harvested</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Orders</p>
                        <p className="text-2xl font-bold text-gray-900">18</p>
                        <p className="text-sm text-gray-600">Restaurant Partners</p>
                      </div>
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Customer Rating</p>
                        <p className="text-2xl font-bold text-gray-900">4.9</p>
                        <p className="text-sm text-gray-600">Average Rating</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Edit Profile Tab */}
          {activeTab === "profile" && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Edit Profile & Farm Details</h3>
                
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue={editedProfile.name}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue={editedProfile.user.email}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          defaultValue={editedProfile.user.phone}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                        <input
                          type="text"
                          defaultValue={editedProfile.profession}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        rows={4}
                        defaultValue={editedProfile.bio}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  {/* Farm Details */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Farm Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Farm Name</label>
                        <input
                          type="text"
                          defaultValue={editedProfile.farmDetails.farmName}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <input
                          type="text"
                          defaultValue={editedProfile.farmDetails.location}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size</label>
                        <input
                          type="text"
                          defaultValue={editedProfile.farmDetails.farmSize}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Farming Method</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                          <option value="Organic">Organic</option>
                          <option value="Conventional">Conventional</option>
                          <option value="Sustainable">Sustainable</option>
                          <option value="Biodynamic">Biodynamic</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Established Year</label>
                        <input
                          type="number"
                          defaultValue={editedProfile.farmDetails.establishedYear}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Produce Listings Tab */}
          {activeTab === "produce" && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Produce Listings</h3>
                <button
                  onClick={() => setEditingProduce({ id: "", name: "", image: "", category: "", pricePerUnit: 0, unit: "", quantity: 0, availability: "", harvestDate: "", description: "" })}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
                >
                  <span>+</span>
                  <span>Add New Produce</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {produceListings.map((produce) => (
                  <div key={produce.id} className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 overflow-hidden shadow-sm">
                    <img src={produce.image} alt={produce.name} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{produce.name}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          produce.availability === "In Stock" ? "bg-green-100 text-green-800" :
                          produce.availability === "Low Stock" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {produce.availability}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{produce.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price:</span>
                          <span className="font-medium">${produce.pricePerUnit.toFixed(2)}/{produce.unit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quantity:</span>
                          <span className="font-medium">{produce.quantity} {produce.unit}s</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Harvest Date:</span>
                          <span className="font-medium">{produce.harvestDate}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <button
                          onClick={() => setEditingProduce(produce)}
                          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-700"
                        >
                          Edit
                        </button>
                        <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-red-700">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Edit Produce Modal */}
              {editingProduce && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-bold text-gray-900">
                          {editingProduce.id ? "Edit Produce" : "Add New Produce"}
                        </h4>
                        <button
                          onClick={() => setEditingProduce(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                          <input
                            type="text"
                            defaultValue={editingProduce.name}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                          <select
                            defaultValue={editingProduce.category}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          >
                            <option value="Vegetables">Vegetables</option>
                            <option value="Fruits">Fruits</option>
                            <option value="Herbs">Herbs</option>
                            <option value="Grains">Grains</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price per Unit</label>
                            <input
                              type="number"
                              step="0.01"
                              defaultValue={editingProduce.pricePerUnit}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                            <select
                              defaultValue={editingProduce.unit}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >
                              <option value="lb">lb</option>
                              <option value="bunch">bunch</option>
                              <option value="box">box</option>
                              <option value="bag">bag</option>
                              <option value="each">each</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity Available</label>
                          <input
                            type="number"
                            defaultValue={editingProduce.quantity}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Harvest Date</label>
                          <input
                            type="date"
                            defaultValue={editingProduce.harvestDate}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <textarea
                            rows={3}
                            defaultValue={editingProduce.description}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Product Image URL</label>
                          <input
                            type="url"
                            defaultValue={editingProduce.image}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                        </div>
                        
                        <div className="flex justify-end space-x-4 pt-4">
                          <button
                            type="button"
                            onClick={() => setEditingProduce(null)}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          >
                            {editingProduce.id ? "Update" : "Add"} Produce
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Inventory Tab */}
          {activeTab === "inventory" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Inventory Management</h3>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-green-200/50 overflow-hidden shadow-sm">
                <div className="px-6 py-4 bg-green-50 border-b border-green-200">
                  <h4 className="text-lg font-semibold text-gray-900">Quick Inventory Update</h4>
                </div>
                
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Product</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Current Stock</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Update Quantity</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {produceListings.map((produce) => (
                          <tr key={produce.id} className="border-b border-gray-100">
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-3">
                                <img src={produce.image} alt={produce.name} className="w-12 h-12 rounded-lg object-cover" />
                                <div>
                                  <p className="font-medium text-gray-900">{produce.name}</p>
                                  <p className="text-sm text-gray-600">{produce.category}</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className="font-medium">{produce.quantity} {produce.unit}s</span>
                            </td>
                            <td className="py-4 px-4">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                produce.availability === "In Stock" ? "bg-green-100 text-green-800" :
                                produce.availability === "Low Stock" ? "bg-yellow-100 text-yellow-800" :
                                "bg-red-100 text-red-800"
                              }`}>
                                {produce.availability}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <input
                                type="number"
                                defaultValue={produce.quantity}
                                className="w-24 px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-green-500"
                              />
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex space-x-2">
                                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                                  Update
                                </button>
                                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                  Edit
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                      Save All Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}