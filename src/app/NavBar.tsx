"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  Bell,
  ShoppingCart,
  User,
  Menu,
  X,
  Leaf,
  HelpCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItem {
  cartId: number;
}

interface NavBarProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  userType: string;
  setUserType: Dispatch<SetStateAction<string>>;
  cart: CartItem[];
  notificationsCount: number;
}

const NavBar: React.FC<NavBarProps> = ({
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  userType,
  setUserType,
  cart,
  notificationsCount,
}) => {
  const router = useRouter();

  return (
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
                onClick={() => setActiveTab("home")}
                className={`px-3 py-2 rounded transition ${
                  activeTab === "home" ? "bg-green-700" : "hover:bg-green-500"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab("marketplace")}
                className={`px-3 py-2 rounded transition ${
                  activeTab === "marketplace"
                    ? "bg-green-700"
                    : "hover:bg-green-500"
                }`}
              >
                Marketplace
              </button>
              <button
                onClick={() => setActiveTab("farmers")}
                className={`px-3 py-2 rounded transition ${
                  activeTab === "farmers"
                    ? "bg-green-700"
                    : "hover:bg-green-500"
                }`}
              >
                Farmers
              </button>
              <button
                onClick={() => router.push("/about")}
                className="px-3 py-2 rounded transition hover:bg-green-500"
              >
                About Us
              </button>
              {userType === "farmer" && (
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`px-3 py-2 rounded transition ${
                    activeTab === "dashboard"
                      ? "bg-green-700"
                      : "hover:bg-green-500"
                  }`}
                >
                  Dashboard
                </button>
              )}
              {userType === "farmer" && (
                <button
                  onClick={() => router.push("/help")}
                  className="flex items-center space-x-1 px-3 py-2 rounded transition hover:bg-green-500"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>Help</span>
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
                {notificationsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationsCount}
                  </span>
                )}
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
                {cart && cart.length > 0 && (
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
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-green-500 pb-4">
            <div className="flex flex-col space-y-2 pt-4">
              <button
                onClick={() => {
                  setActiveTab("home");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded transition ${
                  activeTab === "home" ? "bg-green-700" : "hover:bg-green-500"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveTab("marketplace");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded transition ${
                  activeTab === "marketplace"
                    ? "bg-green-700"
                    : "hover:bg-green-500"
                }`}
              >
                Marketplace
              </button>
              <button
                onClick={() => {
                  setActiveTab("farmers");
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded transition ${
                  activeTab === "farmers"
                    ? "bg-green-700"
                    : "hover:bg-green-500"
                }`}
              >
                Farmers
              </button>
              <button
                onClick={() => {
                  router.push("/about");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 rounded transition hover:bg-green-500"
              >
                About Us
              </button>
              {userType === "farmer" && (
                <button
                  onClick={() => {
                    setActiveTab("dashboard");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded transition ${
                    activeTab === "dashboard"
                      ? "bg-green-700"
                      : "hover:bg-green-500"
                  }`}
                >
                  Dashboard
                </button>
              )}
              {userType === "farmer" && (
                <button
                  onClick={() => {
                    router.push("/help");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left px-3 py-2 rounded transition flex items-center space-x-1 hover:bg-green-500"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span>Help</span>
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
                    {notificationsCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {notificationsCount}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-green-200 transition" />
                    {cart && cart.length > 0 && (
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
};

export default NavBar;
