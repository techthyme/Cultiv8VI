"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../NavBar";

const AboutPage = () => {
  const router = useRouter();
  const activeTab = "about";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userType, setUserType] = useState("business");
  const cart = [];
  const notifications = 3;

  // Handle navbar navigation
  const handleNavigation = (tab: string | ((prevState: string) => string)) => {
    const tabValue = typeof tab === 'function' ? tab(activeTab) : tab;
    if (tabValue === "about") {
      // Already on about page, no action needed
    } else if (tabValue === "home") {
      router.push("/");
    } else if (tabValue === "marketplace") {
      // Navigate to main app and set marketplace tab
      router.push("/?activeTab=marketplace");
    } else if (tabValue === "farmers") {
      // Navigate to main app and set farmers tab  
      router.push("/?activeTab=farmers");
    } else if (tabValue === "dashboard") {
      // Navigate to main app and set dashboard tab
      router.push("/?activeTab=dashboard");
    } else {
      // Default navigation to main app
      router.push("/");
    }
  };

  return (
    <div className="bg-white">
      <NavBar 
        activeTab={activeTab}
        setActiveTab={handleNavigation}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        userType={userType}
        setUserType={setUserType}
        cart={cart}
        notifications={notifications}
      />
      
      {/* About Section */}
      <About />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* CTA Section */}
      <CtaSection />
      
      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-green-600 text-sm font-semibold uppercase tracking-wide">
              Our Story
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Building a sustainable agricultural ecosystem in the Virgin Islands
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cultiv8VI was born from a simple yet powerful vision: to create a thriving 
              marketplace that connects local Virgin Islands farmers directly with restaurants, 
              bakeries, and food businesses throughout the territory.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that by shortening the supply chain, we can provide fresher produce 
              to businesses while ensuring farmers receive fair compensation for their hard work. 
              Our platform makes it easy for both sides to connect, communicate, and build 
              lasting partnerships.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Local Farmers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">100+</div>
                <div className="text-sm text-gray-600">Business Partners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Islands Served</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&h=400&fit=crop"
              alt="Virgin Islands farmers"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      title: "Community First",
      description: "We believe in strengthening our local agricultural community by connecting farmers directly with businesses.",
      icon: "👥"
    },
    {
      title: "Sustainability",
      description: "Supporting sustainable farming practices and reducing the environmental impact of food transportation.",
      icon: "🌱"
    },
    {
      title: "Quality Focus",
      description: "Ensuring the highest quality, freshest produce reaches local businesses and ultimately, consumers.",
      icon: "🎯"
    },
    {
      title: "Fair Trade",
      description: "Ensuring farmers receive fair compensation while businesses get competitive pricing on fresh produce.",
      icon: "🤝"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      business: "Island Fresh Restaurant",
      location: "St. Thomas",
      quote: "Cultiv8VI has transformed how we source our produce. The quality is amazing and supporting local farmers feels great.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "James Peterson",
      business: "Green Valley Farm",
      location: "St. Croix",
      quote: "Finally, a platform that connects us directly with restaurants. Our sales have increased by 40% since joining.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Sarah Williams",
      business: "Coral Bay Bakery",
      location: "St. John",
      quote: "The convenience and reliability of Cultiv8VI has made our menu planning so much easier. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600">
            Hear from farmers and businesses who are part of the Cultiv8VI family
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.business}</div>
                  <div className="text-sm text-green-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CtaSection = () => {
  return (
    <div className="bg-green-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Join Our Community?
        </h2>
        <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          Whether you're a farmer looking to reach new markets or a business seeking 
          fresh, local produce, we're here to connect you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Join as a Farmer
          </button>
          <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition border border-green-500">
            Find Local Produce
          </button>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">
            Growing the Virgin Islands agricultural community
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-900 font-medium">Active Farmers</div>
            <div className="text-sm text-gray-600">Across all three islands</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-900 font-medium">Business Partners</div>
            <div className="text-sm text-gray-600">Restaurants and food businesses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-900 font-medium">Products Listed</div>
            <div className="text-sm text-gray-600">Fresh produce varieties</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-gray-900 font-medium">Local Sourcing</div>
            <div className="text-sm text-gray-600">Increase for partner businesses</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;