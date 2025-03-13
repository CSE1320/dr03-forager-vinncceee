"use client";

import { useRouter } from "next/navigation"; 
import NavBar from "../../components/NavBar";

export default function MushroomComparisonPage() {
  const router = useRouter();

  return (
    <div className="w-[414px] h-screen mx-auto bg-[#F2F2F2] flex flex-col">
      
      {/* ✅ Top Section with Rounded Border */}
      <div className="w-[414px] h-[117px] bg-[#579076] rounded-b-[40px] shadow-md flex items-center justify-center relative">
        
        {/* ✅ Back Button (Left Side) */}
        <button onClick={() => router.back()} className="absolute left-4">
          <img src="/icons/backButton.svg" alt="Back" className="w-[30px] h-[30px]" />
        </button>

        {/* ✅ "Mushroom Comparison" Title - Centered */}
        <h1 className="text-white font-nunito text-[32px] font-bold">
          Mushroom Comparison
        </h1>
      </div>

      {/* ✅ Scrollable Content Section */}
      <div className="flex-1 w-full overflow-y-auto px-4 pb-20">
        {/* ✅ Example Content */}
        <div className="mt-4 space-y-4">
          <p className="text-center text-gray-700">Comparison content goes here...</p>
          <div className="h-[1000px] bg-gray-200">Extra scrollable space</div>
        </div>
      </div>

      {/* ✅ NavBar - Stays at the Bottom */}
      <NavBar />
    </div>
  );
}
