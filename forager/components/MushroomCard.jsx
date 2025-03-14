"use client";

import { useRouter } from "next/navigation";

const MushroomCard = ({ imageSrc, title, showWarning }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/mushroom?title=${encodeURIComponent(title)}&imageSrc=${encodeURIComponent(imageSrc)}&showWarning=${showWarning}`);
  };

  return (
    <div onClick={handleClick} className="w-[101px] flex flex-col items-center cursor-pointer">
      <div className="relative w-[101px] h-[126px] bg-white shadow-lg flex justify-center items-start overflow-hidden pt-2">
        <img src={imageSrc} alt={title} className="w-[94px] h-[103px] object-cover" />
        {showWarning && (
          <img
            src="/icons/ic_round-warning.png"
            alt="Warning"
            className="absolute top-2 left-2 w-[20px] h-[20px]"
          />
        )}
      </div>
      <p className="text-[#203B5F] font-nunito text-[16px] font-semibold mt-2 whitespace-nowrap">
        {title}
      </p>
    </div>
  );
};

export default MushroomCard;
