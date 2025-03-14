"use client";

import React from "react";
import MushroomCard from "./MushroomCard";

const mushrooms = [
  { imageSrc: "/icons/paddystrawimg.png", title: "Paddy Straw", accuracy: "90%", showWarning: false, bgColor: "bg-[rgba(115,216,159,0.90)]" },
  { imageSrc: "/icons/destroyingangelimg.png", title: "Destroying Angel", accuracy: "80%", showWarning: true, bgColor: "bg-[#F66]" },
  { imageSrc: "/icons/falsedeathimg.png", title: "False Death Cap", accuracy: "70%", showWarning: true, bgColor: "bg-[#FF7E7E]" },
  { imageSrc: "/icons/puffballimg.png", title: "Puffball", accuracy: "60%", showWarning: false, bgColor: "bg-[rgba(165,165,165,0.90)]" }
];

const MushroomList = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="w-full text-center text-[#324053] font-nunito text-[25px] font-bold mb-3 mr-8">
        Similar Matches
      </h2>
      <div className="w-[290px] flex flex-col items-center ml-4">
        <div className="grid grid-cols-2 gap-2 w-full justify-center">
          {mushrooms.map((mushroom, index) => (
            <div key={index} className="relative w-[131px] h-[160px] flex-shrink-0">
              <div 
                className={`absolute top-2 left-2 ${mushroom.bgColor} w-[31px] h-[27px] rounded-[7px] flex items-center justify-center z-10`}
                style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }} 
              >
                <span className="text-white text-[12px] font-bold">{mushroom.accuracy}</span>
              </div>
              {mushroom.showWarning && (
                <img 
                  src="/icons/iconWarning.svg" 
                  alt="Warning" 
                  className="absolute top-2 left-[40px] w-6 h-6 z-10"
                />
              )}
              <div className="relative z-0">
                <MushroomCard
                  imageSrc={mushroom.imageSrc}
                  title={mushroom.title}
                  accuracy={mushroom.accuracy}
                  showWarning={mushroom.showWarning}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MushroomList;
