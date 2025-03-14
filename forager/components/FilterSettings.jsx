"use client";

import React from "react";
import PillList from "./PillList";

function FilterSettings({ onClose, selectedFilters, setSelectedFilters }) {
  const filters = {
    tags: ["Recent", "Favorites"],
    regions: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"],
    category: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"]
  };

  const toggleFilter = (category, option) => {
    setSelectedFilters(prev => {
      const updated = { ...prev };
      
      if (updated[category]?.includes(option)) {
        updated[category] = updated[category].filter(item => item !== option);
      } else {
        updated[category] = [...(updated[category] || []), option];
      }
      
      return updated;
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[380px] h-[806px] bg-[#F2F2F2] rounded-[20px] flex flex-col p-6 shadow-lg relative">
        <div className="relative flex justify-center items-center pb-3">
          <h2 className="text-lg text-black font-bold text-center">FILTER</h2>
          <button className="absolute right-0 w-[30px] h-[30px] flex items-center justify-center" onClick={onClose}>
            <img src="/icons/xButton.svg" alt="Close" className="w-[30px] h-[30px]" />
          </button>
        </div>
        <div className="items-center flex flex-col gap-6 mt-3">
          {Object.entries(filters).map(([category, options]) => (
            <PillList
              key={category}
              category={category}
              options={options}
              selectedFilters={selectedFilters[category] || []}
              toggleFilter={(option) => toggleFilter(category, option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterSettings;
