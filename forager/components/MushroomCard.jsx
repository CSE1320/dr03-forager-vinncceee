"use client";

import React from "react";

function MushroomCard({ imageSrc, title, showWarning }) {
  return (
    <div className="w-[101px] flex flex-col items-center">
      {/* Polaroid Frame */}
      <div className="relative w-[101px] h-[126px] bg-white shadow-md flex justify-center items-start overflow-hidden">
        {/* Mushroom Image */}
        <img src={imageSrc} alt={title} className="w-[94px] h-[103px] object-cover" />
        
        {/* Warning Label */}
        {showWarning && (
          <img src="/icons/ic_round-warning.png" alt="Warning" className="absolute top-[8px] left-[6px] w-[16px] h-[16px]" />
        )}
      </div>

      {/* ✅ Mushroom Name - Prevent Wrapping & Allow Overflow */}
      <p className="mt-2 text-[#203B5F] font-nunito font-semibold text-[16px] text-center whitespace-nowrap overflow-visible">
        {title}
      </p>
    </div>
  );
}

export default MushroomCard;
