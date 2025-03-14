"use client";

import { useRouter } from "next/navigation"; 
import NavBar from "../../components/NavBar";

export default function MushroomComparisonPage() {
  const router = useRouter();

  return (
    <div className="w-[414px] h-screen mx-auto bg-[#F2F2F2] flex flex-col">
      
      {/* ✅ Top Section */}
      <div className="w-[414px] h-[117px] bg-[#579076] rounded-b-[40px] shadow-md flex items-center justify-center relative flex-shrink-0">
        <button onClick={() => router.back()} className="absolute left-0 top-[70%] transform -translate-y-1/2">
          <img src="/icons/backButton.svg" alt="Back" className="w-[60px] h-[70px]" />
        </button>

        {/* ✅ "Compare" Title - Centered */}
        <h1 className="text-white font-nunito text-[32px] font-bold font-weight-700 mt-14">
          Compare
        </h1>
      </div>

      {/* ✅ Scrollable Content Section */}
      <div className="flex-1 w-full overflow-y-auto px-4 pb-20">

        {/* ✅ Warning Label */}
        <div className="w-[290px] h-[90px] flex-shrink-0 rounded-[20px] bg-[#FF5050] flex flex-col justify-center px-4 mt-4 mx-auto shadow-md">
          <div className="flex items-center">
            <img src="/icons/warningIcon.svg" alt="Warning" className="w-6 h-6 mr-2" />
            <p className="text-white text-[20px] font-nunito font-bold">WARNING</p>
          </div>
          <p className="text-white text-[16px] font-nunito font-normal mt-1">
            This is a toxic species, proceed with caution.
          </p>
        </div>

      </div>

      {/* ✅ NavBar - Stays at the Bottom */}
      <NavBar />
    </div>
  );
}
