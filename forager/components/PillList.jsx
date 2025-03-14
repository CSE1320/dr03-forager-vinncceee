"use client";

import React from "react";
import Pill from "./Pill";

export default function PillList({ category, options = [], selectedFilters, toggleFilter }) {
  return (
    <div className="w-full mt-4">
      <h3 className="text-black text-[24px] font-bold font-nunito leading-tight mb-2">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map(option => (
          <Pill
            key={option}
            label={option}
            isSelected={selectedFilters.includes(option)}
            onClick={() => toggleFilter(option)}
          />
        ))}
      </div>
    </div>
  );
}