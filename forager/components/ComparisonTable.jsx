"use client";

import React from "react";

const comparisonData = [
  { label: "Cap Shape", userValue: "Flat", comparedValue: "Flat" },
  { label: "Cap Color", userValue: "Brown", comparedValue: "Yellow" },
  { label: "Cap Texture", userValue: "Smooth", comparedValue: "Smooth" },
  { label: "Gills Type", userValue: "Free", comparedValue: "Free" },
  { label: "Gills Color", userValue: "White", comparedValue: "White" },
  { label: "Stem Shape", userValue: "Slender", comparedValue: "Slender" },
  { label: "Stem Color", userValue: "White", comparedValue: "White" },
  { label: "Stem Ring", userValue: "Absent", comparedValue: "Absent" },
  { label: "Habitat", userValue: "?", comparedValue: "Near    oak/beech" }
];

const ComparisonTable = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* ✅ Image Comparison */}
      <div className="flex justify-center gap-10">
        {/* ✅ Your Photo */}
        <div className="flex flex-col items-center">
          <div className="w-[163px] h-[251px] bg-white shadow-md flex flex-col items-center justify-start relative"
            style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <div className="w-[151px] h-[193px] flex items-center justify-center mt-[31px] mb-[27px]">
              <img src="/icons/yourPhoto.svg" alt="Your Photo" className="w-full h-full object-cover" />
            </div>
          </div>
          <h2 className="text-[#324053] font-nunito text-[25px] font-bold mt-2">Your Photo</h2>
        </div>

        {/* ✅ Compared Mushroom - Death Cap */}
        <div className="flex flex-col items-center">
          <div className="w-[163px] h-[251px] bg-white shadow-md flex flex-col items-center justify-start relative"
            style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            
            {/* ✅ Top Left Section - Skull Icon + Warning Pill */}
            <div className="absolute top-1 left-2 flex items-center space-x-2">
              <img src="/icons/skullIcon.svg" alt="Skull" className="w-6 h-6" />
              <div className="w-[100px] h-[24px] flex-shrink-0 bg-[#FF5050] rounded-[10px] flex items-center justify-center space-x-2 px-2">
                <img src="/icons/warningIcon.svg" alt="Warning" className="w-4 h-4" />
                <span className="text-white text-[11px] font-nunito font-semibold">
                  97% Match
                </span>
              </div>
            </div>

            <div className="w-[151px] h-[193px] flex items-center justify-center mt-[31px] mb-[27px]">
              <img src="/icons/deathCapImg.png" alt="Death Cap" className="w-full h-full object-cover" />
            </div>
          </div>
          <h2 className="text-[#324053] font-nunito text-[25px] font-bold mt-2">Death Cap</h2>
        </div>
      </div>

      {/* ✅ Table Comparison - Underlines Exactly 90px */}
      <div className="relative w-[400px] mt-9 mr-2">
        {/* ✅ Left Vertical Line (Full Height, Properly Positioned) */}
        <div className="absolute left-[120px] top-0 bottom-0 h-full border-l-[2px] border-black"></div>

        {/* ✅ Right Vertical Line (Full Height, Properly Positioned) */}
        <div className="absolute left-[280px] top-0 bottom-0 h-full border-l-[2px] border-black"></div>


        <ul className="w-[380px ml-2 mr-2]">
            {comparisonData.map((row, index) => (
            <li key={index} className="flex justify-between items-center py-3">
                
                {/* ✅ Left Column - User's attribute (Bold & Black Underline) */}
                <div className={`w-[90px] text-[#324053] text-[16px] font-nunito font-bold flex items-center justify-center border-b-[2px] border-black ${
                    row.label === "Habitat" ? "mt-[-8px]" : "pb-1"
                }`}>
                {row.userValue}
                </div>

                {/* ✅ Middle Column - Attribute Label */}
                <span 
                className={`text-[#324053] text-[19px] font-nunito text-center font-bold w-auto ${
                    row.label === "Habitat" || row.label === "Stem Ring" ? "mt-[-5px]" : ""
                }`}
                >
                {row.label}
                </span>

                {/* ✅ Right Column - Compared Mushroom's attribute */}
                <div className="w-[90px] text-[#324053] text-[18px] font-nunito font-bold flex flex-col items-center justify-center pb-1">
                {row.label === "Habitat" ? (
                    <span className="text-center">
                    Near Oak/<br />Beech
                    </span>
                ) : (
                    <span className="text-center">{row.comparedValue}</span>
                )}
                </div>
            </li>
            ))}
        </ul>


        </div>

    </div>
  );
};

export default ComparisonTable;
