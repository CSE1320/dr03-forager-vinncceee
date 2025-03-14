"use client";
import { useSearchParams } from "next/navigation";

const Mushroom = ({ onAddFavorite }) => {  // ✅ Accept `onAddFavorite` as a prop
  const searchParams = useSearchParams();
  
  const title = searchParams.get("title") || "Unknown Mushroom";
  const imageSrc = "/icons/deathCapBigImg.svg"; 

  return (
    <div className="w-full flex flex-col items-center px-4">
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

        {/* ✅ Favorite Button */}
        <img 
          src="/icons/addFavoriteButton.svg" 
          alt="Add to Favorites" 
          className="w-19 h-19 cursor-pointer mr-12"
          onClick={() => onAddFavorite(title)}  // ✅ Call function when clicked
        />
      </div>
    </div>
  );
};

export default Mushroom;
