"use client";

import React, { useState } from "react";
import PillList from "./PillList"; // Import PillList

function FilterSettings({ onClose }) {
  const [selectedFilters, setSelectedFilters] = useState({
    tags: ["Favorites"],
    regions: ["Texas"],
    Category: ["Poisonous"]
  });

  const filters = {
    Tags: ["Favorites", "Recent"],
    Regions: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"],
    Category: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"]
  };

  const toggleFilter = (category, option) => {
    setSelectedFilters(prev => {
      const lowerCategory = category.toLowerCase(); // Ensure consistency in keys
      const updated = { ...prev };
      
      if (updated[lowerCategory]?.includes(option)) {
        updated[lowerCategory] = updated[lowerCategory].filter(item => item !== option);
      } else {
        updated[lowerCategory] = [...(updated[lowerCategory] || []), option];
      }
      
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[380px] h-[806px] bg-[#F2F2F2] rounded-[20px] flex flex-col p-6 shadow-lg relative ">

        {/* Filter Header */}
        <div className="relative flex justify-center items-center pb-3">
          <h2 className="text-lg text-black font-bold text-center">FILTER</h2>
          <button 
            className="absolute right-0 w-[30px] h-[30px] flex items-center justify-center"
            onClick={onClose}
          >
            <img src="/icons/xButton.svg" alt="Close" className="w-[30px] h-[30px]" />
          </button>
        </div>

      {/* Filter Sections using PillList */}
      <div className="items-center flex flex-col gap-6 mt-3"> {/* ⬆ Increased `gap-6` for better separation */}
        {Object.entries(filters).map(([category, options]) => {
          const lowerCategory = category.toLowerCase(); // Ensure key consistency

          return (
            <PillList
              key={category}
              category={category}
              options={options} // ✅ Ensure `options` is passed correctly
              selectedFilters={selectedFilters[lowerCategory] || []}
              toggleFilter={(option) => toggleFilter(lowerCategory, option)}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default FilterSettings;
