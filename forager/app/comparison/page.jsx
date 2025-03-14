"use client";

import { useRouter } from "next/navigation"; 
import NavBar from "../../components/NavBar";
import WarningLabel from "../../components/WarningLabel"; // ✅ Import WarningLabel
import ComparisonTable from "@/components/ComparisonTable";

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
      <div className="flex-1 w-full overflow-y-auto px-4 pb-40">

        {/* ✅ Reusable Warning Label Component */}
        <WarningLabel /> 

        <ComparisonTable 
          userMushroom={{
            imageSrc: "/icons/yourPhoto.png",
            attributes: [
              { label: "Cap Shape", userValue: "Flat" },
              { label: "Cap Color", userValue: "Brown" },
              { label: "Cap Texture", userValue: "Smooth" },
              { label: "Gills Type", userValue: "Free" },
              { label: "Gills Color", userValue: "White" },
              { label: "Stem Shape", userValue: "Slender" },
              { label: "Stem Color", userValue: "White" },
              { label: "Stem Ring", userValue: "Absent" },
              { label: "Habitat", userValue: "?" }
            ]
          }}
          comparedMushroom={{
            imageSrc: "/icons/deathcap.png",
            title: "Death Cap",
            accuracy: "97% Match",
            attributes: [
              { label: "Cap Shape", comparedValue: "Flat" },
              { label: "Cap Color", comparedValue: "Yellow" },
              { label: "Cap Texture", comparedValue: "Smooth" },
              { label: "Gills Type", comparedValue: "Free" },
              { label: "Gills Color", comparedValue: "White" },
              { label: "Stem Shape", comparedValue: "Slender" },
              { label: "Stem Color", comparedValue: "White" },
              { label: "Stem Ring", comparedValue: "Absent" },
              { label: "Habitat", comparedValue: "Near oak/beech", warning: true }
            ]
          }}
        />


      </div>

      {/* ✅ NavBar - Stays at the Bottom */}
      <NavBar />
    </div>
  );
}
