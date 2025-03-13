"use client";
import { useState } from "react";
import Link from "next/link";
import MushroomCard from "@/components/MushroomCard";
import NavBar from "../../components/NavBar"; 
import Search from "../../components/Search";  
import Pill from "../../components/Pill"; 
import FilterSettings from "@/components/FilterSettings";

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Search State

  // ✅ Mushroom Data (Replace with dynamic data if needed)
  const mushrooms = [
    { imageSrc: "/icons/deathCapImg.png", title: "Death Cap", showWarning: true },
    { imageSrc: "/icons/puffballimg.png", title: "Puffball", showWarning: false },
    { imageSrc: "/icons/destroyingangelimg.png", title: "Destroying Angel", showWarning: true },
    { imageSrc: "/icons/falsedeathimg.png", title: "False Death Cap", showWarning: false },
    { imageSrc: "/icons/paddystrawimg.png", title: "Paddy Straw", showWarning: false }
  ];

  // ✅ Filtered Mushrooms based on search term
  const filteredMushrooms = mushrooms.filter((mushroom) =>
    mushroom.title.toLowerCase().includes(searchTerm.toLowerCase()) // 🔍 Matching Logic
  );

  return (
    <div className="w-[414px] h-[896px] mx-auto bg-[#397367] shadow-lg overflow-hidden flex flex-col relative">
      <img
        src="/icons/mushroomDash.svg"
        alt="Mushroom Icon"
        className="absolute top-0 right-0 w-[276px] h-[276px] flex-shrink-0"
      />

      {/* Header Text */}
      <div className="absolute top-16 left-6">
        <h2 className="text-white text-[24px] font-medium leading-[40px]">Hi,</h2>
        <h2 className="text-white text-[45px] font-extrabold leading-[40px]">Chantelle!</h2>
      </div>

      {/* Profile Circle "C" */}
      <div className="absolute top-[7rem] right-7 w-[41px] h-[41px] bg-[#5F464B] rounded-full flex items-center justify-center">
        <span className="text-white text-[20px] font-bold">C</span>
      </div>

      {/* Rectangle Background */}
      <div className="absolute bottom-0 w-[414px] h-[713px] bg-[#F2F2F2] rounded-t-[41px] flex flex-col pt-6 px-6">
        
        {/* ✅ Search Bar - Pass setSearchTerm to update the search input */}
        <Search onFilterClick={() => setIsFilterOpen(true)} onSearchChange={setSearchTerm} />

        {/* Section Title */}
        <h2 className="text-[#324053] font-nunito text-[25px] font-bold mt-10 self-start">
          My Collection
        </h2>

        {/* Pill Filters */}
        <div className="flex gap-2 mt-1 self-start">
          <Pill label="Texas" isSelected={true} />
          <Pill label="Favorites" isSelected={true} />
        </div>

        {/* ✅ Mushroom Cards Grid - Display only filtered mushrooms */}
        <div className="grid grid-cols-3 gap-4 mt-6 justify-center">
          {filteredMushrooms.length > 0 ? (
            filteredMushrooms.map((mushroom, index) => (
              <MushroomCard 
                key={index}
                imageSrc={mushroom.imageSrc}
                title={mushroom.title}
                showWarning={mushroom.showWarning}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3 mt-6">
              No mushrooms found.
            </p>
          )}
        </div>
      </div>

      {/* Filter Modal - Show when `isFilterOpen` is true */}
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="w-[380px] h-[806px] bg-[#F2F2F2] rounded-[20px] flex flex-col p-6 shadow-lg z-[110] relative">
            <FilterSettings onClose={() => setIsFilterOpen(false)} />
          </div>
        </div>
      )}

      {/* NavBar - Ensure it Stays Below the Modal */}
      <NavBar className="z-[50]" />
    </div>      
  );
}
