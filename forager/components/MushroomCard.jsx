"use client";
import React from "react";
import Link from "next/link";

export default function MushroomCard({ imageSrc, title, showWarning }) {
  return (
    <Link href={`/mushroom?name=${encodeURIComponent(title)}`} passHref>
      <div className="cursor-pointer flex flex-col items-center">
        {/* ✅ Polaroid Card */}
        <div className="w-[101px] h-[126px] bg-white shadow-lg flex justify-center items-start overflow-hidden relative">
          <img src={imageSrc} alt={title} className="w-[94px] h-[103px] object-cover" />
          {showWarning && (
            <img src="/icons/warningIcon.svg" alt="Warning" className="absolute top-2 left-2 w-[20px] h-[20px]" />
          )}
        </div>

        {/* ✅ Mushroom Name (Title) */}
        <p className="text-center text-[#203B5F] font-nunito text-[16px] font-semibold mt-2">
          {title}
        </p>
      </div>
    </Link>
  );
}
