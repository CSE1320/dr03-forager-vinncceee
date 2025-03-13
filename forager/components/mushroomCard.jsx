import React from "react";

export default function MushroomCard({ image, name, hasWarning }) {
  return (
    <div className="w-[101px] h-[161px] bg-white">
      {/* Polaroid Frame */}
      <div className="w-[101px] h-[126px] bg-white shadow-md flex justify-center items-start overflow-hidden pt-2 relative">
        <img src={image} alt={name} className="w-[94px] h-[103px] object-cover" />
        {hasWarning && (
          <img src="/assets/ic_round-warning.png" alt="Warning" className="absolute top-[11px] left-[8px] w-[20px] h-[20px]" />
        )}
      </div>
      {/* Mushroom Name */}
      <p className="text-[#203B5F] text-center font-nunito text-[16px] font-semibold mt-2">{name}</p>
    </div>
  );
}
