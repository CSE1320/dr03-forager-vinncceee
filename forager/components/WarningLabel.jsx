import React from "react";

const WarningLabel = () => {
  return (
    <div className="w-[290px] h-[90px] flex-shrink-0 rounded-[20px] bg-[#FF5050] flex flex-col justify-center px-4 mt-4 mx-auto shadow-md">
      <div className="flex items-center">
        <img src="/icons/warningIcon.svg" alt="Warning" className="w-6 h-6 mr-2" />
        <p className="text-white text-[20px] font-nunito font-bold">WARNING</p>
      </div>
      <p className="text-white text-[16px] font-nunito font-normal mt-1">
        This is a toxic species, proceed with caution.
      </p>
    </div>
  );
};

export default WarningLabel;