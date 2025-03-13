"use client";

import React from "react";
import Link from "next/link";

const MushroomCard = ({ imageSrc, title, showWarning }) => {
  return (
    <Link href="/mushroom" passHref>
      <div className="w-[101px] flex flex-col items-center cursor-pointer">
        {/* Polaroid Frame */}
        <div className="relative w-[101px] h-[126px] bg-white shadow-lg flex justify-center items-start overflow-hidden pt-2">
          <img src={imageSrc} alt={title} className="w-[94px] h-[103px] object-cover" />
          
          {/* Warning Label - Show if `showWarning` is true */}
          {showWarning && (
            <img
              src="/icons/ic_round-warning.png"
              alt="Warning"
              className="absolute top-2 left-2 w-[20px] h-[20px]"
            />
          )}
        </div>

        {/* Mushroom Title */}
        <p className="text-[#203B5F] font-nunito text-[16px] font-semibold mt-2 whitespace-nowrap">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default MushroomCard;
