"use client";

import { useSearchParams } from "next/navigation";

const Mushroom = () => {
  const searchParams = useSearchParams();
  
  const title = searchParams.get("title") || "Unknown Mushroom";

  // ✅ Always use deathCapBigImg.svg for the Mushroom details page
  const imageSrc = "/icons/deathCapBigImg.svg"; 

  return (
    <div className="w-full flex flex-col items-center px-4">
      
      {/* ✅ Custom Polaroid Frame */}
      <div className="w-[290px] h-[290px] flex-shrink-0 bg-white shadow-md flex flex-col items-center justify-start relative mt-4"
        style={{ boxShadow: "2px 4px 4px 0px rgba(168, 148, 148, 0.25)" }}>

        {/* ✅ Top Left Section - Skull Icon + Warning Pill */}
        <div className="absolute top-1 left-2 flex items-center space-x-2">
          {/* ✅ Skull Icon */}
          <img src="/icons/skullIcon.svg" alt="Skull" className="w-6 h-6" />

          {/* ✅ Warning Pill */}
          <div className="w-[100px] h-[24px] flex-shrink-0 bg-[#FF5050] rounded-[10px] flex items-center justify-center space-x-2 px-2">
            <img src="/icons/warningIcon.svg" alt="Warning" className="w-4 h-4" />
            <span className="text-white text-[11px] font-nunito font-semibold">
              97% Match
            </span>
          </div>
        </div>

        {/* ✅ Image Container with Correct Aspect Ratio & Margins */}
        <div className="w-[267px] h-[210px] flex-shrink-0 flex items-center justify-center mt-[31px] mb-[49px]">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

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
