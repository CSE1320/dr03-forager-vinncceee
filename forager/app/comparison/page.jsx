"use client";

import { useRouter } from "next/navigation"; 
import NavBar from "../../components/NavBar";
import WarningLabel from "../../components/WarningLabel";
import ComparisonTable from "@/components/ComparisonTable";

export default function MushroomComparisonPage() {
  const router = useRouter();

  return (
    <div className="w-[414px] h-screen mx-auto bg-[#F2F2F2] flex flex-col">
      <div className="w-[414px] h-[117px] bg-[#579076] rounded-b-[40px] shadow-md flex items-center justify-center relative flex-shrink-0 mb-4">
        <button onClick={() => router.back()} className="absolute left-0 top-[70%] transform -translate-y-1/2">
          <img src="/icons/backButton.svg" alt="Back" className="w-[60px] h-[70px]" />
        </button>
        <h1 className="text-white font-nunito text-[32px] font-bold font-weight-700 mt-14">
          Compare
        </h1>
      </div>
      <div className="flex-1 w-full overflow-y-auto px-4 pb-40">
        <WarningLabel /> 
        <ComparisonTable />
      </div>
      <NavBar />
    </div>
  );
}