"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";
import Message from "@/components/Message";

export default function MushroomPage() {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDismissed = sessionStorage.getItem("messageDismissed");
      if (!isDismissed) {
        setShowMessage(true);
      }
    }
  }, []);

  const handleCloseMessage = () => {
    setShowMessage(false);
    sessionStorage.setItem("messageDismissed", "true");
  };

  return (
    <div className="w-[414px] h-screen mx-auto bg-[#F2F2F2] flex flex-col">
      
      {/* ✅ Top Section */}
      <div className="w-[414px] h-[117px] bg-[#579076] rounded-b-[40px] shadow-md flex items-center justify-center relative flex-shrink-0">
        <button onClick={() => router.back()} className="absolute left-0 top-[70%] transform -translate-y-1/2">
          <img src="/icons/backButton.svg" alt="Back" className="w-[60px] h-[70px]" />
        </button>
        <h1 className="text-white font-nunito text-[32px] font-bold font-weight-700 mt-14">
          Match Results
        </h1>
      </div>

      {/* ✅ Scrollable Content Section */}
      <div className="flex-1 w-full overflow-y-auto px-4 pb-20">
        
        {/* ✅ Show Message Only If Not Dismissed */}
        {showMessage && <Message onClose={handleCloseMessage} />}

        {/* ✅ "Not What You Expected?" & Report Error */}
        <div className="flex items-center justify-between mt-2 px-4">
          <p className="text-[#314053] text-[13px] font-nunito font-normal ml-8">Not what you expected?</p>
          <button className="w-[120px] h-[35px] bg-[#FF5050] text-white text-[14px] font-nunito font-bold last:rounded-[10px] flex items-center justify-center whitespace-nowrap pr-1 px-3 mr-8">
            Report Error
            <img src="/icons/rightButton.svg" alt=">" className="w-8 h-8" />
          </button>
        </div>

        {/* ✅ Warning Label (Left-Aligned) */}
        <div className="w-[290px] h-[90px] flex-shrink-0 rounded-[20px] bg-[#FF5050] flex flex-col justify-center px-4 mt-4 mx-auto shadow-md">
          <div className="flex items-center">
            <img src="/icons/warningIcon.svg" alt="Warning" className="w-6 h-6 mr-2" />
            <p className="text-white text-[20px] font-nunito font-bold">WARNING</p>
          </div>
          <p className="text-white text-[16px] font-nunito font-normal mt-1">
            This is a toxic species, proceed with caution.
          </p>
        </div>
        
        {/* ✅ Compare Button (Navigates to /comparison) */}
        <div className="w-full flex justify-end mt-6">
          <button 
            className="flex items-center bg-transparent border-none cursor-pointer"
            onClick={() => router.push("/comparison")} // ✅ Click to navigate
          >
            <span className="text-[#888787] text-[14px] font-nunito font-normal">
              Compare
            </span>
            <img src="/icons/rightIcon.svg" alt=">" className="w-5 h-5 ml-1" />
          </button>
        </div>

        {/* ✅ Example Content */}
        <div className="mt-4 space-y-4">
          <p className="text-center text-gray-700">Scrollable content goes here...</p>
          <div className="h-[1000px] bg-gray-200">Extra scrollable space</div>
        </div>
      </div>

      {/* ✅ NavBar - Stays at the Bottom */}
      <NavBar />
    </div>
  );
}
