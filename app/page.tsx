import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, ShoppingCart, User, Menu, X, Bell, Filter, Heart, Truck, Phone, Mail, Calendar, Package, TrendingUp, Users, Leaf, Award } from 'lucide-react';

const Cultiv8VI = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState('business'); // 'farmer' or 'business'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [notifications, setNotifications] = useState(3);
  const [showFilters, setShowFilters] = useState(false);

  // Sample data
  const farmers = [
    {
      id: 1,
      name: "Green Valley Farm",
      location: "St. Thomas",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop",
      certified: true,
      specialties: ["Organic Vegetables", "Herbs", "Tropical Fruits"]
    },
    {
      id: 2,
      name: "Tropical Paradise Gardens",
      location: "St. John",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop",
      certified: true,
      specialties: ["Mangoes", "Papayas", "Coconuts"]
    },
    {
      id: 3,
      name: "Island Fresh Produce",
      location: "St. Croix",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
      certified: false,
      specialties: ["Root Vegetables", "Plantains", "Peppers"]
    }
  ];

  const produce = [
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: "Green Valley Farm",
      location: "St. Thomas",
      price: 4.50,
      unit: "lb",
      quantity: 50,
      image: "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
      category: "vegetables",
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-25"
    },
    {
      id: 2,
      name: "Fresh Mangoes",
      farmer: "Tropical Paradise Gardens",
      location: "St. John",
      price: 3.25,
      unit: "lb",
      quantity: 75,
      image: "https://images.unsplash.com/photo-1605027990121-cbae9ea5b4c4?w=300&h=200&fit=crop",
      category: "fruits",
      inSeason: true,
      organic: false,
      harvestDate: "2024-08-26"
    },
    {
      id: 3,
      name: "Caribbean Peppers",
      farmer: "Island Fresh Produce",
      location: "St. Croix",
      price: 6.00,
      unit: "lb",
      quantity: 25,
      image: "https://images.unsplash.com/photo-1583201111945-2b9fc8b1bb66?w=300&h=200&fit=crop",
      category: "vegetables",
      inSeason: true,
      organic: false,
      harvestDate: "2024-08-24"
    },
    {
      id: 4,
      name: "Fresh Basil",
      farmer: "Green Valley Farm",
      location: "St. Thomas",
      price: 8.00,
      unit: "bunch",
      quantity: 30,
      image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=300&h=200&fit=crop",
      category: "herbs",
      inSeason: true,
      organic: true,
      harvestDate: "2024-08-27"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🌱' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
    { id: 'fruits', name: 'Fruits', icon: '🥭' },
    { id: 'herbs', name: 'Herbs', icon: '🌿' },
    { id: 'roots', name: 'Root Vegetables', icon: '🥕' }
  ];

  const filteredProduce = produce.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const Navigation = () => (
    <nav className="bg-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-100" />
              <span className="font-bold text-xl">Cultiv8VI</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-3 py-2 rounded transition ${activeTab === 'home' ? 'bg-green-700' : 'hover:bg-green-500'}`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-3 py-2 rounded transition ${activeTab === 'marketplace' ? 'bg-green-700' : 'hover:bg-green-500'}`}
              >
                Marketplace
              </button>
              <button
                onClick={() => setActiveTab('farmers')}
                className={`px-3 py-2 rounded transition ${activeTab === 'farmers' ? 'bg-green-700' : 'hover:bg-green-500'}`}
              >
                Farmers
              </button>
              {userType === 'farmer' && (
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-2 rounded transition ${activeTab === 'dashboard' ? 'bg-green-700' : 'hover:bg-green-500'}`}
                >
                  Dashboard
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="bg-green-700 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="business">Business</option>
                <option value="farmer">Farmer</option>
              </select>
              <div className="relative">
                <Bell className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
              <User className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
            </div>
            
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-500 pb-4">
            <div className="flex flex-col space-y-2 pt-4">
              <button
                onClick={() => {setActiveTab('home'); setIsMobileMenuOpen(false);}}
                className={`text-left px-3 py-2 rounded transition ${activeTab === 'home' ? 'bg-green-700' : 'hover:bg-green-500'}`}
              >
                Home
              </button>
              <button
                onClick={() => {setActiveTab('marketplace'); setIsMobileMenuOpen(false);}}
                className={`text-left px-3 py-2 rounded transition ${activeTab === 'marketplace' ? 'bg-green-700' : 'hover:bg-green-500'}`}
              >
                Marketplace
              </button>
              <button
                onClick={() => {setActiveTab('farmers'); setIsMobileMenuOpen(false);}}
                className={`text-left px-3 py-2 rounded transition ${activeTab === 'farmers' ? 'bg-green-700' : 'hover:bg-green-500'}`}
              >
                Farmers
              </button>
              {userType === 'farmer' && (
                <button
                  onClick={() => {setActiveTab('dashboard'); setIsMobileMenuOpen(false);}}
                  className={`text-left px-3 py-2 rounded transition ${activeTab === 'dashboard' ? 'bg-green-700' : 'hover:bg-green-500'}`}
                >
                  Dashboard
                </button>
              )}
              <div className="flex items-center justify-between pt-2 border-t border-green-500 mt-2">
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="bg-green-700 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <option value="business">Business</option>
                  <option value="farmer">Farmer</option>
                </select>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Bell className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
                    {notifications > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {notifications}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </div>
                  <User className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Full Width Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=1080&fit=crop" 
            alt="Virgin Islands Farm" 
            className="w-full h-full object-cover opacity-20"
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
                <span className="text-green-100 font-medium">Supporting Virgin Islands Agriculture</span>
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
                The premier platform connecting Virgin Islands farmers with restaurants, bakeries, 
                and food businesses. Get the freshest local produce while supporting our community 
                and reducing food imports.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-green-200 text-sm">Local Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-green-200 text-sm">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">25%</div>
                  <div className="text-green-200 text-sm">Import Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">4.8★</div>
                  <div className="text-green-200 text-sm">Rating</div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button
                  onClick={() => setActiveTab('marketplace')}
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
              Our platform makes it easy for restaurants, bakeries, and food businesses 
              to source fresh, local produce directly from Virgin Islands farmers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Local</h3>
              <p className="text-gray-600">All produce sourced directly from Virgin Islands farmers, ensuring maximum freshness and supporting local agriculture.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day or next-day delivery available across all Virgin Islands with flexible pickup options.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition duration-300">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rated farmers and real customer reviews ensure you get the highest quality produce every time.</p>
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

  const MarketplacePage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for produce, farmers, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition lg:w-auto w-full justify-center"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <span>{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Island</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Islands</option>
                    <option>St. Thomas</option>
                    <option>St. John</option>
                    <option>St. Croix</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Prices</option>
                    <option>Under $5</option>
                    <option>$5 - $10</option>
                    <option>Over $10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Certification</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All Certifications</option>
                    <option>Organic Only</option>
                    <option>Certified Farms</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProduce.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  {item.organic && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Organic
                    </span>
                  )}
                  {item.inSeason && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      In Season
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow hover:bg-red-50 transition">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">per {item.unit}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{item.farmer} • {item.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">
                    {item.quantity} {item.unit} available
                  </span>
                  <span className="text-sm text-gray-500">
                    Harvested {new Date(item.harvestDate).toLocaleDateString()}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(item)}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProduce.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No produce found matching your search.</div>
            <button
              onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Clear filters and show all products
            </button>
          </div>
        )}
      </div>

      {/* Shopping Cart Sidebar */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full mx-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Cart ({cart.length})</h3>
            <ShoppingCart className="h-5 w-5 text-green-600" />
          </div>
          <div className="max-h-40 overflow-y-auto space-y-2">
            {cart.map((item) => (
              <div key={item.cartId} className="flex items-center justify-between text-sm">
                <span className="truncate">{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
            </div>
            <button className="w-full mt-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const FarmersPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Partner Farmers</h1>
          <p className="text-lg text-gray-600">Meet the dedicated farmers growing fresh produce across the Virgin Islands</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.map((farmer) => (
            <div key={farmer.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
              <img
                src={farmer.image}
                alt={farmer.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{farmer.name}</h3>
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
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">{farmer.rating} rating</span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Specialties:</h4>
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

  const FarmerDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Farmer Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your farm, track orders, and update inventory</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">24</p>
                <p className="text-gray-600">Active Listings</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">$1,247</p>
                <p className="text-gray-600">This Month</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">18</p>
                <p className="text-gray-600">Active Orders</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-semibold text-gray-900">4.8</p>
                <p className="text-gray-600">Rating</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {[
                { id: 1, business: "Island Breeze Restaurant", items: "Organic Tomatoes, Fresh Basil", amount: "$28.50", status: "Pending" },
                { id: 2, business: "Paradise Bakery", items: "Caribbean Peppers", amount: "$18.00", status: "Confirmed" },
                { id: 3, business: "Coral Bay Cafe", items: "Fresh Mangoes", amount: "$16.25", status: "Delivered" },
              ].map((order) => (
                <div key={order.id} className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{order.business}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'Confirmed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{order.items}</p>
                  <p className="font-semibold text-green-600">{order.amount}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Management */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Current Inventory</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 text-sm font-medium">
                Add Product
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {produce.slice(0, 4).map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.quantity} {item.unit} available</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">${item.price}/{item.unit}</p>
                      <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition duration-300">
              <Package className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-700">Add Product</span>
            </button>
            <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition duration-300">
              <TrendingUp className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-700">View Analytics</span>
            </button>
            <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition duration-300">
              <Bell className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-700">Send Update</span>
            </button>
            <button className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition duration-300">
              <Calendar className="h-8 w-8 text-gray-400 mb-2" />
              <span className="text-sm font-medium text-gray-700">Schedule Harvest</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {activeTab === 'home' && <HomePage />}
      {activeTab === 'marketplace' && <MarketplacePage />}
      {activeTab === 'farmers' && <FarmersPage />}
      {activeTab === 'dashboard' && userType === 'farmer' && <FarmerDashboard />}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="font-bold text-xl">Cultiv8VI</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Connecting Virgin Islands farmers with local businesses to build a sustainable, 
                local food ecosystem that benefits everyone.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition duration-300">
                  Facebook
                </button>
                <button className="text-gray-400 hover:text-white transition duration-300">
                  Instagram
                </button>
                <button className="text-gray-400 hover:text-white transition duration-300">
                  Twitter
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Businesses</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition duration-300">Browse Products</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Place Orders</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Business Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Farmers</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition duration-300">Join Platform</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Farmer Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Resources</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cultiv8VI. All rights reserved. Supporting Virgin Islands agriculture.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cultiv8VI;