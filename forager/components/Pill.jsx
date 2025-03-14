"use client";

import React from "react";

function Pill({ label, isSelected, onClick }) {
  return (
    <button
      className={`inline-flex px-[17px] py-0 justify-center items-center gap-[10px] rounded-[100px] 
        cursor-pointer transition duration-300 
        ${isSelected ? "bg-[#579076] text-white" : "bg-[#D9D9D9] text-[#7C7C7C]"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Pill;