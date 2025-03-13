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
    <div className="flex flex-col items-center w-full">
      {/* ✅ Similar Matches Header */}
      <h2 className="text-[#324053] font-nunito text-[20px] font-bold mb-4">
        Similar Matches
      </h2>

      {/* ✅ 2-Column Grid for Mushroom Cards */}
      <div className="grid grid-cols-2 gap-4">
        {mushrooms.map((mushroom, index) => (
          <MushroomCard
            key={index}
            imageSrc={mushroom.imageSrc}
            title={mushroom.title}
            accuracy={mushroom.accuracy}
            showWarning={mushroom.showWarning}
          />
        ))}
      </div>
    </div>
  );
};

export default MushroomList;
