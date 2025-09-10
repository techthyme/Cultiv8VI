"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Book,
  Calendar,
  HelpCircle,
  Leaf,
  Sun,
  CloudRain,
  Thermometer,
  Sprout,
  Users,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

interface SeasonalItem {
  crop: string;
  peakSeason: string;
  availability: "high" | "medium" | "low" | "unavailable";
  notes: string;
}

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState("faq");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState("all");

  // FAQ Data
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How do I create my farmer profile on Cultiv8VI?",
      answer: "To create your profile, click 'Join as Farmer' and complete the registration form with your farm details, certifications, and contact information. You'll need to verify your location and provide photos of your operation.",
      category: "getting-started"
    },
    {
      id: 2,
      question: "What commission does Cultiv8VI charge?",
      answer: "Cultiv8VI charges a 10% commission on completed transactions. This covers payment processing, platform maintenance, and customer support. There are no upfront listing fees.",
      category: "pricing"
    },
    {
      id: 3,
      question: "How do I list my products?",
      answer: "Go to your Farmer Dashboard and click 'Add Product'. Include clear photos, detailed descriptions, pricing per unit, and current availability. Update your listings regularly to reflect fresh inventory.",
      category: "getting-started"
    },
    {
      id: 4,
      question: "When do I get paid for my orders?",
      answer: "Payments are processed within 24 hours of order delivery confirmation. Funds are deposited directly to your bank account. You can track all payments in your dashboard.",
      category: "pricing"
    },
    {
      id: 5,
      question: "What if a business wants to cancel an order?",
      answer: "Orders can be canceled up to 2 hours before the scheduled pickup/delivery time. Late cancellations may result in partial payment to cover your preparation costs.",
      category: "orders"
    },
    {
      id: 6,
      question: "Do I need organic certification to sell on the platform?",
      answer: "Organic certification is not required, but it can help differentiate your products. Clearly label whether items are organic, naturally grown, or conventional. Certification documents can be uploaded to your profile.",
      category: "certifications"
    },
    {
      id: 7,
      question: "How do I handle seasonal gaps in production?",
      answer: "Use the 'Seasonal Calendar' tool to communicate your growing schedule to buyers. This helps them plan menus and reduces order cancellations during your off-seasons.",
      category: "seasonal"
    },
    {
      id: 8,
      question: "What quality standards do businesses expect?",
      answer: "Focus on freshness, proper sizing, and clean presentation. Include harvest dates in your listings and maintain cold storage when possible. Customer reviews will help you understand specific buyer preferences.",
      category: "quality"
    },
    {
      id: 9,
      question: "Can I offer different prices for bulk orders?",
      answer: "Yes! Set up tiered pricing in your product listings (e.g., 1-10 lbs at $X, 11+ lbs at $Y). Many restaurants prefer bulk purchasing for better value.",
      category: "pricing"
    },
    {
      id: 10,
      question: "How do I coordinate deliveries and pickups?",
      answer: "You can offer pickup at your farm, delivery within your service area, or meet at agreed locations. Set your delivery fees and minimum orders in your profile settings.",
      category: "logistics"
    }
  ];

  // Articles Data
  const articles: Article[] = [
    {
      id: 1,
      title: "Maximizing Your Hurricane Season Harvest",
      summary: "Essential strategies for protecting crops and maintaining supply during VI hurricane season (June-November).",
      content: "Hurricane season presents unique challenges for Virgin Islands farmers. Here are proven strategies to protect your crops and maintain consistent supply to restaurant partners...",
      category: "weather",
      date: "2024-08-20",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Post-Harvest Handling for Restaurant Quality",
      summary: "Best practices for cooling, storing, and packaging produce to meet commercial kitchen standards.",
      content: "Restaurant buyers expect consistent quality and proper handling. Follow these post-harvest techniques to ensure your produce arrives fresh and maintains its value...",
      category: "quality",
      date: "2024-08-15",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Growing Herbs Year-Round in the VI Climate",
      summary: "Techniques for continuous herb production to supply restaurants with fresh basil, cilantro, and local specialties.",
      content: "Herbs are high-value crops perfect for restaurant sales. Learn how to stagger plantings and manage tropical growing conditions for year-round supply...",
      category: "crops",
      date: "2024-08-10",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Building Relationships with Restaurant Buyers",
      summary: "Communication strategies and service practices that create loyal, long-term business customers.",
      content: "Success on Cultiv8VI goes beyond good produce. Here's how to build lasting relationships with chefs and purchasing managers...",
      category: "business",
      date: "2024-08-05",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Soil Health in Tropical Agriculture",
      summary: "Maintaining productive soil in VI's climate through composting, cover crops, and natural amendments.",
      content: "Healthy soil is the foundation of successful farming. Learn tropical-specific techniques for building and maintaining soil fertility...",
      category: "soil",
      date: "2024-07-28",
      readTime: "8 min read"
    }
  ];

  // Seasonal Availability Data
  const seasonalData: SeasonalItem[] = [
    { crop: "Tomatoes", peakSeason: "Dec - Apr", availability: "high", notes: "Challenging to grow during wet season" },
    { crop: "Mangoes", peakSeason: "Jun - Aug", availability: "medium", notes: "Tree fruit harvest varies by variety" },
    { crop: "Peppers", peakSeason: "Year-round", availability: "high", notes: "Hot peppers especially productive" },
    { crop: "Basil", peakSeason: "Year-round", availability: "high", notes: "Succession planting recommended" },
    { crop: "Lettuce", peakSeason: "Nov - Mar", availability: "low", notes: "Difficult in hot, humid months" },
    { crop: "Plantains", peakSeason: "Year-round", availability: "high", notes: "Consistent production once established" },
    { crop: "Papayas", peakSeason: "Year-round", availability: "medium", notes: "Peak production varies by location" },
    { crop: "Sweet Potatoes", peakSeason: "Sep - Feb", availability: "medium", notes: "Harvest timing flexible" },
    { crop: "Coconuts", peakSeason: "Year-round", availability: "high", notes: "Mature trees produce continuously" },
    { crop: "Okra", peakSeason: "May - Oct", availability: "high", notes: "Thrives in wet season heat" }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = faqCategory === "all" || faq.category === faqCategory;
    return matchesSearch && matchesCategory;
  });

  const faqCategories = [
    { id: "all", name: "All Questions" },
    { id: "getting-started", name: "Getting Started" },
    { id: "pricing", name: "Pricing & Payments" },
    { id: "orders", name: "Orders & Fulfillment" },
    { id: "quality", name: "Quality Standards" },
    { id: "seasonal", name: "Seasonal Planning" },
    { id: "certifications", name: "Certifications" },
    { id: "logistics", name: "Delivery & Logistics" }
  ];

  const articleCategories = [
    { id: "weather", name: "Weather & Climate", icon: "☀️" },
    { id: "quality", name: "Quality & Handling", icon: "⭐" },
    { id: "crops", name: "Crop Management", icon: "🌱" },
    { id: "business", name: "Business Tips", icon: "💼" },
    { id: "soil", name: "Soil & Fertility", icon: "🌍" }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "high": return "bg-green-100 text-green-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-orange-100 text-orange-800";
      case "unavailable": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Farmer Help Center
            </h1>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Resources, guides, and support to help Virgin Islands farmers succeed on Cultiv8VI
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("faq")}
              className={`flex items-center space-x-2 py-4 border-b-2 transition ${
                activeTab === "faq"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-medium">FAQs</span>
            </button>
            <button
              onClick={() => setActiveTab("articles")}
              className={`flex items-center space-x-2 py-4 border-b-2 transition ${
                activeTab === "articles"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <Book className="h-5 w-5" />
              <span className="font-medium">Farming Articles</span>
            </button>
            <button
              onClick={() => setActiveTab("seasonal")}
              className={`flex items-center space-x-2 py-4 border-b-2 transition ${
                activeTab === "seasonal"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Seasonal Guide</span>
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`flex items-center space-x-2 py-4 border-b-2 transition ${
                activeTab === "contact"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Contact Support</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* FAQ Section */}
        {activeTab === "faq" && (
          <div>
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <select
                  value={faqCategory}
                  onChange={(e) => setFaqCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {faqCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map(faq => (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Articles Section */}
        {activeTab === "articles" && (
          <div>
            {selectedArticle ? (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-green-600 hover:text-green-700 mb-4 flex items-center"
                  >
                    ← Back to Articles
                  </button>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {articles.find(a => a.id === selectedArticle)?.title}
                  </h1>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <span>{articles.find(a => a.id === selectedArticle)?.date}</span>
                    <span>{articles.find(a => a.id === selectedArticle)?.readTime}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="prose max-w-none">
                    {articles.find(a => a.id === selectedArticle)?.content}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {articleCategories.map(category => (
                    <button
                      key={category.id}
                      className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-gray-300 hover:border-green-500 hover:bg-green-50 transition"
                    >
                      <span>{category.icon}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles.map(article => (
                    <div
                      key={article.id}
                      className="bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                      onClick={() => setSelectedArticle(article.id)}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{article.summary}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Seasonal Guide */}
        {activeTab === "seasonal" && (
          <div>
            <div className="bg-white rounded-lg shadow-sm mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Virgin Islands Seasonal Produce Guide
                </h2>
                <p className="text-gray-600">
                  Understanding seasonal availability helps you plan production and communicate with buyers
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Crop
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Peak Season
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Current Availability
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {seasonalData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {item.crop}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                          {item.peakSeason}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(item.availability)}`}>
                            {item.availability}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {item.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Seasonal Tips */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Sun className="h-8 w-8 text-yellow-500 mr-3" />
                  <h3 className="text-lg font-semibold">Dry Season Tips</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Focus on heat-tolerant crops</li>
                  <li>• Implement efficient irrigation</li>
                  <li>• Plan for peak tourist season demand</li>
                  <li>• Consider shade structures</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <CloudRain className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold">Wet Season Tips</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Improve drainage systems</li>
                  <li>• Focus on tropical leafy greens</li>
                  <li>• Monitor for fungal diseases</li>
                  <li>• Plan hurricane preparations</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Sprout className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">Year-Round Crops</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Herbs (basil, cilantro, thyme)</li>
                  <li>• Peppers and hot peppers</li>
                  <li>• Plantains and bananas</li>
                  <li>• Coconuts (mature trees)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Support */}
        {activeTab === "contact" && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Options */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Get Support
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Phone className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone Support</p>
                      <p className="text-gray-600">Mon-Fri, 8 AM - 6 PM</p>
                      <p className="text-green-600">(340) 555-FARM</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Mail className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email Support</p>
                      <p className="text-gray-600">Response within 24 hours</p>
                      <p className="text-green-600">farmers@cultiv8vi.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Live Chat</p>
                      <p className="text-gray-600">Available during business hours</p>
                      <p className="text-green-600">Start chat in dashboard</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Users className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Farmer Community</p>
                      <p className="text-gray-600">Connect with other VI farmers</p>
                      <p className="text-green-600">Join WhatsApp group</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Resources */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Quick Resources
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-medium text-gray-900">Getting Started Guide</h3>
                    <p className="text-gray-600 text-sm">Complete setup walkthrough for new farmers</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-medium text-gray-900">Product Photography Tips</h3>
                    <p className="text-gray-600 text-sm">Best practices for showcasing your produce</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-medium text-gray-900">Pricing Guidelines</h3>
                    <p className="text-gray-600 text-sm">How to set competitive yet profitable prices</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-medium text-gray-900">Quality Standards</h3>
                    <p className="text-gray-600 text-sm">Meeting restaurant buyer expectations</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-medium text-gray-900">Troubleshooting</h3>
                    <p className="text-gray-600 text-sm">Common issues and solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-yellow-800 mb-2">Emergency Agricultural Support</h3>
              <p className="text-yellow-700 mb-4">For weather emergencies, pest outbreaks, or urgent farming issues:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>VI Cooperative Extension</strong><br />
                  (340) 692-4015
                </div>
                <div>
                  <strong>Department of Agriculture</strong><br />
                  (340) 778-0997
                </div>
                <div>
                  <strong>Hurricane Preparedness</strong><br />
                  (340) 774-2244
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}