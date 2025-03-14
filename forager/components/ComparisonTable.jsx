"use client";

import React, { useState, useRef } from "react";

const comparisonData = [
  { label: "Cap Shape", userValue: "", comparedValue: "Flat" },
  { label: "Cap Color", userValue: "", comparedValue: "Yellow" },
  { label: "Cap Texture", userValue: "", comparedValue: "Smooth" },
  { label: "Gills Type", userValue: "", comparedValue: "Free" },
  { label: "Gills Color", userValue: "", comparedValue: "White" },
  { label: "Stem Shape", userValue: "", comparedValue: "Slender" },
  { label: "Stem Color", userValue: "", comparedValue: "White" },
  { label: "Stem Ring", userValue: "", comparedValue: "Absent" },
  { label: "Habitat", userValue: "", comparedValue: "Near Oak/Beech" }
];

const ComparisonTable = () => {
  const [userValues, setUserValues] = useState(
    comparisonData.reduce((acc, row) => {
      acc[row.label] = row.userValue || "";
      return acc;
    }, {})
  );

  const [hasTyped, setHasTyped] = useState(
    comparisonData.reduce((acc, row) => {
      acc[row.label] = false;
      return acc;
    }, {})
  );

  const inputRefs = useRef({});

  const handleChange = (label, value) => {
    setUserValues((prev) => ({
      ...prev,
      [label]: value
    }));

    setHasTyped((prev) => ({
      ...prev,
      [label]: true
    }));
  };

  const handleUndo = (label) => {
    setUserValues((prev) => ({
      ...prev,
      [label]: ""
    }));

    setHasTyped((prev) => ({
      ...prev,
      [label]: false
    }));
  };

  const handleQuestionClick = (label) => {
    setHasTyped((prev) => ({
      ...prev,
      [label]: true
    }));

    setUserValues((prev) => ({
      ...prev,
      [label]: ""
    }));

    if (inputRefs.current[label]) {
      inputRefs.current[label].focus();
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      <div className="flex justify-center gap-10">
        <div className="flex flex-col items-center">
          <div
            className="w-[163px] h-[251px] bg-white shadow-md flex flex-col items-center justify-start relative"
            style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="w-[151px] h-[193px] flex items-center justify-center mt-[31px] mb-[27px]">
              <img src="/icons/yourPhoto.svg" alt="Your Photo" className="w-full h-full object-cover" />
            </div>
          </div>
          <h2 className="text-[#324053] font-nunito text-[25px] font-bold mt-2">Your Photo</h2>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="w-[163px] h-[251px] bg-white shadow-md flex flex-col items-center justify-start relative"
            style={{ boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="absolute top-1 left-2 flex items-center space-x-2">
              <img src="/icons/skullIcon.svg" alt="Skull" className="w-6 h-6" />
              <div className="w-[100px] h-[24px] flex-shrink-0 bg-[#FF5050] rounded-[10px] flex items-center justify-center space-x-2 px-2">
                <img src="/icons/warningIcon.svg" alt="Warning" className="w-4 h-4" />
                <span className="text-white text-[11px] font-nunito font-semibold">97% Match</span>
              </div>
            </div>

            <div className="w-[151px] h-[193px] flex items-center justify-center mt-[31px] mb-[27px]">
              <img src="/icons/deathCapImg.png" alt="Death Cap" className="w-full h-full object-cover" />
            </div>
          </div>
          <h2 className="text-[#324053] font-nunito text-[25px] font-bold mt-2">Death Cap</h2>
        </div>
      </div>

      <div className="relative w-[400px] mt-9">
        <div className="absolute left-[120px] top-0 bottom-0 h-full border-l-[2px] border-black"></div>
        <div className="absolute left-[280px] top-0 bottom-0 h-full border-l-[2px] border-black"></div>

        <ul className="w-[400px]">
          {comparisonData.map((row, index) => (
            <li key={index} className="flex justify-between items-center py-3">
              <div className="w-[90px] text-[#324053] text-[16px] font-nunito font-bold flex items-center justify-between border-b-[2px] border-black pb-1 relative">
                <button onClick={() => handleUndo(row.label)} className="mr-2">
                  <img src="/icons/undoXButton.png" alt="Undo" className="w-6 h-4" />
                </button>

                <input
                  type="text"
                  ref={(el) => (inputRefs.current[row.label] = el)}
                  value={userValues[row.label]}
                  onChange={(e) => handleChange(row.label, e.target.value)}
                  className="w-full bg-transparent text-center focus:outline-none text-[17px]"
                />

                {!hasTyped[row.label] && (
                  <button onClick={() => handleQuestionClick(row.label)} className="absolute left-1/2 transform -translate-x-1/2">
                    <img src="/icons/questionMark.png" alt="?" className="w-4 h-4" />
                  </button>
                )}
              </div>

              <span className="text-[#324053] text-[19px] font-nunito text-center font-bold w-auto">{row.label}</span>

              <div className="w-[90px] text-[#324053] text-[18px] font-nunito font-bold flex flex-col items-center justify-center pb-1 ml-2">
                {row.label === "Habitat" ? (
                  <span className="text-center">
                    Near Oak/<br />Beech
                  </span>
                ) : (
                  <span className="text-center">{row.comparedValue}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComparisonTable;
