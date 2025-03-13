"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Message from "@/components/Message";

export default function MushroomPage() {
  const searchParams = useSearchParams();
  const mushroomName = searchParams.get("name") || "Unknown Mushroom";

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
    <div className="page flex flex-col items-center justify-center h-screen">
      {/* ✅ Show Mushroom Name */}
      <h1 className="text-2xl font-bold">{mushroomName}</h1>

      {/* ✅ Show Message Only If Not Dismissed */}
      {showMessage && <Message onClose={handleCloseMessage} />}

      {/* ✅ Go Back Button */}
      <Link href="/dashboard">
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go Back
        </button>
      </Link>

      <NavBar />
    </div>
  );
}
