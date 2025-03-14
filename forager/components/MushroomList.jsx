"use client";

import React from "react";
import MushroomCard from "./MushroomCard"; // ✅ Ensure correct import

const mushrooms = [
  { imageSrc: "/icons/paddystrawimg.png", title: "Paddy Straw", accuracy: "90%", showWarning: false },
  { imageSrc: "/icons/destroyingangelimg.png", title: "Destroying Angel", accuracy: "80%", showWarning: true },
  { imageSrc: "/icons/falsedeathimg.png", title: "False Death Cap", accuracy: "70%", showWarning: true },
  { imageSrc: "/icons/puffballimg.png", title: "Puffball", accuracy: "60%", showWarning: false }
];

const MushroomList = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center "> {/* ✅ Full width, centered */}
      {/* ✅ Similar Matches Header */}
      <h2 className="w-full text-center text-[#324053] font-nunito text-[25px] font-bold mb-3 mr-8">
        Similar Matches
      </h2>


      {/* ✅ Wrapper to center grid */}
      <div className="w-[290px] flex flex-col items-center">
        {/* ✅ 2-Column Grid for Mushroom Cards */}
        <div className="grid grid-cols-2 gap-2 w-full justify-center">
          {mushrooms.map((mushroom, index) => (
            <div key={index} className="w-[131px] h-[160px] flex-shrink-0">
              <MushroomCard
                imageSrc={mushroom.imageSrc}
                title={mushroom.title}
                accuracy={mushroom.accuracy}
                showWarning={mushroom.showWarning}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MushroomList;
