// "use client";
// import React, { useState, useEffect, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { Leaf } from "lucide-react";
// import HomePage from "./HomePage";
// import Marketplace from "@/components/client/market-place";
// import FarmersPage from "./FarmersPage";
// import FarmerDashboard from "./dashboard/page";
// import { Product, ProductCategory } from "@/types";

// const SearchParamsHandler = ({
//   setActiveTab,
// }: {
//   setActiveTab: (tab: string) => void;
// }) => {
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const tabParam = searchParams.get("activeTab");
//     if (
//       tabParam &&
//       ["home", "marketplace", "farmers", "dashboard"].includes(tabParam)
//     ) {
//       setActiveTab(tabParam);
//     }
//   }, [searchParams, setActiveTab]);

//   return null;
// };

// const Cultiv8VI = () => {
//   // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("home");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [showFilters, setShowFilters] = useState(false);

//   // FIXME: need to get this from the auth context
//   const userType = "farmer";
//   //******* */

//   // Sample produce for farmer dashboard - in real app this would come from user's products
//   const sampleProductsForDashboard: Product[] = [
//     {
//       id: "1",
//       farm_id: "1",
//       name: "Organic Tomatoes",
//       description:
//         "Fresh, vine-ripened organic tomatoes grown in rich Virgin Islands soil. Perfect for salads, sauces, and cooking.",
//       farmer: "Green Valley Farm",
//       farmerLocation: "St. Thomas",
//       price: 4.5,
//       unit: "lb",
//       quantity: 50,
//       image:
//         "https://images.unsplash.com/photo-1546470427-e42146a5e5d3?w=300&h=200&fit=crop",
//       category: ProductCategory.vegetables,
//       inSeason: true,
//       organic: true,
//       harvestDate: "2024-08-25",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Suspense fallback={null}>
//         <SearchParamsHandler setActiveTab={setActiveTab} />
//       </Suspense>

//       {activeTab === "home" && <HomePage setActiveTab={setActiveTab} />}
//       {activeTab === "marketplace" && (
//         <Marketplace
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//           showFilters={showFilters}
//           setShowFilters={setShowFilters}
//         />
//       )}
//       {activeTab === "farmers" && <FarmersPage />}
//       {activeTab === "dashboard" && userType === "farmer" && (
//         <FarmerDashboard products={sampleProductsForDashboard} />
//       )}

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center space-x-2 mb-4">
//                 <Leaf className="h-8 w-8 text-green-400" />
//                 <span className="font-bold text-xl">Cultiv8VI</span>
//               </div>
//               <p className="text-gray-300 mb-4 max-w-md">
//                 Connecting Virgin Islands farmers with local businesses to build
//                 a sustainable, local food ecosystem that benefits everyone.
//               </p>
//               <div className="flex space-x-4">
//                 <button className="text-gray-400 hover:text-white transition duration-300">
//                   Facebook
//                 </button>
//                 <button className="text-gray-400 hover:text-white transition duration-300">
//                   Instagram
//                 </button>
//                 <button className="text-gray-400 hover:text-white transition duration-300">
//                   Twitter
//                 </button>
//               </div>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">For Businesses</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Browse Products
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Place Orders
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Business Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Pricing
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">For Farmers</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Join Platform
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Farmer Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Resources
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="hover:text-white transition duration-300"
//                   >
//                     Support
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>
//               &copy; 2025 Cultiv8VI. All rights reserved. Supporting Virgin
//               Islands agriculture.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Cultiv8VI;


import Cultiv8VIClient from "./_components/Cultiv8VIClient";

const Cultiv8VI = async () => {
  // Add delay for loading animation
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return the client component
  return <Cultiv8VIClient />;
};

export default Cultiv8VI;

