"use client";

import { useSearchParams } from "next/navigation";
import MushroomCard from "./MushroomCard";

const Mushroom = () => {
  const searchParams = useSearchParams();
  
  const title = searchParams.get("title") || "Unknown Mushroom";
  const imageSrc = searchParams.get("imageSrc") || "/images/defaultMushroom.jpg";
  const showWarning = searchParams.get("showWarning") === "true"; // Convert to boolean

  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* ✅ Display Mushroom Card at the Top */}
      <MushroomCard imageSrc={imageSrc} title={title} showWarning={showWarning} />

      {/* ✅ Description Section */}
      <div className="mt-4 w-full max-w-[360px] bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-[#203B5F] text-[18px] font-bold font-nunito">{title}</h2>
        <p className="text-[#314053] text-[14px] font-nunito mt-2 leading-relaxed">
          This is a detailed description of the {title}. Information on habitat, edibility, and distinguishing characteristics would be displayed here.
        </p>
      </div>
    </div>
  );
};

export default Mushroom;
