"use client";

import React from "react";

function Pill({ label, isSelected, onClick }) {
  return (
    <button
      className={`inline-flex px-[17px] py-0 justify-center items-center gap-[10px] rounded-[100px] bg-[#579076] text-white cursor-pointer transition duration-300 
        ${isSelected ? "bg-green-700" : "bg-[#579076]"}`
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Pill;
