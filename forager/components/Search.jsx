"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({ onFilterClick, onSearchChange }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[305px] h-[39px] bg-white rounded-[19.5px] flex items-center px-4 shadow-md">
        <FaSearch className="text-gray-500 text-lg mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full bg-transparent outline-none text-gray-700"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <img 
        src="/icons/filterIcon.svg" 
        alt="Filter Icon" 
        className="w-[24px] h-[24px] cursor-pointer"
        onClick={onFilterClick}
      />
    </div>
  );
}
