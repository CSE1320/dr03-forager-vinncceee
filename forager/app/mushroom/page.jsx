"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Use router for navigation
import NavBar from "../../components/NavBar";
import Message from "@/components/Message";

export default function MushroomPage() {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Check if the message was already dismissed in this session
      const isDismissed = sessionStorage.getItem("messageDismissed");
      if (!isDismissed) {
        setShowMessage(true);
      }
    }
  }, []);

  const handleCloseMessage = () => {
    setShowMessage(false);
    sessionStorage.setItem("messageDismissed", "true"); // ✅ Prevent message from showing again until refresh
  };

  return (
    <div className="w-[414px] h-screen mx-auto bg-[#F2F2F2] flex flex-col">
      
      {/* ✅ Top Section - Fixed in Place */}
      <div className="w-[414px] h-[117px] bg-[#579076] rounded-b-[40px] shadow-md flex items-center justify-center relative flex-shrink-0">
        
        {/* ✅ Back Button (Left Side) */}
        <button onClick={() => router.back()} className="absolute left-0 top-[70%] transform -translate-y-1/2">
          <img src="/icons/backButton.svg" alt="Back" className="w-[60px] h-[70px]" />
        </button>

        {/* ✅ "Match Results" Title */}
        <h1 className="text-white font-nunito text-[32px] font-bold font-weight-700 mt-14">
          Match Results
        </h1>
      </div>

      {/* ✅ Scrollable Content Section (Below Header) */}
      <div className="flex-1 w-full overflow-y-auto px-4 pb-20">
        {/* ✅ Show Message Only If Not Dismissed */}
        {showMessage && <Message onClose={handleCloseMessage} />}

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
