"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const Mushroom = ({ onAddFavorite }) => {  
  const searchParams = useSearchParams();
  
  const title = searchParams.get("title") || "Death Cap";
  const imageSrc = "/icons/deathCapBigImg.svg"; 

  // ✅ State to track if the item is favorited
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(true);
    onAddFavorite(title);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 -mt-3">
      {/* ✅ Custom Polaroid Frame */}
      <div className="w-[290px] h-[290px] flex-shrink-0 bg-white shadow-md flex flex-col items-center justify-start relative mt-4"
        style={{ boxShadow: "2px 4px 4px 0px rgba(168, 148, 148, 0.25)" }}>

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

        {/* ✅ Image Container */}
        <div className="w-[267px] h-[210px] flex-shrink-0 flex items-center justify-center mt-[31px] mb-[49px]">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* ✅ Title Section */}
      <div className="mt-4 w-full max-w-[360px] flex items-center justify-between ml-14">
        <div>
          <h2 className="text-[#324053] text-[30px] font-nunito font-semibold">{title}</h2>
          <p className="text-[#324053] text-[20px] font-nunito italic font-normal mt-1">
            Amanita phalloides
          </p>
        </div>

        {/* ✅ Favorite Button / Star Toggle */}
        <div className="relative w-12 h-12 flex items-center justify-center mr-16">
          {!isFavorited ? (
            <img 
              src="/icons/addFavoriteButton.svg" 
              alt="Add to Favorites" 
              className="w-18 h-18 cursor-pointer"
              onClick={handleFavoriteClick}  
            />
          ) : (
            <img 
              src="/icons/star.png" 
              alt="Favorited" 
              className="w-15 h-18 object-contain"
            />
          )}
        </div>
      </div>

      {/* ✅ Fast Facts Section */}
      <div className="w-[290px] h-[168px] flex-shrink-0 rounded-[40px] bg-[#8E4A49] mt-2 p-6 text-white font-nunito">
        <h3 className="text-[20px] font-semibold -mt-3 ml-2 ">Fast Facts</h3>
        <ul className="text-[16px] space-y-1 ml-2 ">
          <li> Cap Diameter: 5-15cm</li>
          <li> Gill Color: White</li>
          <li> Stem Color: White</li>
          <li> Habitat: Temperate regions</li>
        </ul>
      </div>

      {/* ✅ Additional Description Section */}
      <div className="w-[290px] h-[264px] flex-shrink-0 text-[#000] font-nunito text-[16px] font-normal leading-[25px] mt-4 -mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
      </div>
    </div>
  );
};

export default Mushroom;
