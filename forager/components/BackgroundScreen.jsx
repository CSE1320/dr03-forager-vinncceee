"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BackgroundScreen = () => {
  const router = useRouter();

  const handleEllipseClick = () => {
    router.push("/mushroom");

  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center z-50"
      style={{ backgroundImage: "url('/icons/photoBackground.svg')", backgroundSize: "cover" }}
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* You can add content here */}
      </div>
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[420px] h-[132px] flex-shrink-0 rounded-b-lg shadow-lg flex justify-between items-center px-4"
        style={{ background: "rgba(0, 0, 0, 0.50)" }}>
        <img src="/icons/backButton.svg" alt="Back Button" className="w-[45px] h-auto ml-8 mt-10" />
        <img src="/icons/flashIcon.png" alt="Flash Icon" className="w-10 h-10 mr-10 mt-10" />
      </div>
      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[420px] h-[119px] flex-shrink-0 rounded-t-lg shadow-lg flex justify-between items-center px-4"
        style={{ background: "rgba(0, 0, 0, 0.50)" }}>
        <img src="/icons/albumIcon.svg" alt="Album Icon" className="w-10 h-10 ml-10" />
        <img src="/icons/flipIcon.svg" alt="Flip Icon" className="w-10 h-10 mr-10" />
      </div>
      
      {/* Overlapping Ellipses at Bottom Center - Clickable */}
      <div 
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center cursor-pointer"
        onClick={handleEllipseClick}
      >
        <img src="/icons/eclipse1Icon.svg" alt="Eclipse 1" className="w-[81px] h-auto relative" />
        <img src="/icons/eclipse2Icon.svg" alt="Eclipse 2" className="w-[70px] h-auto absolute" />
      </div>
    </div>
  );
};

export default BackgroundScreen;