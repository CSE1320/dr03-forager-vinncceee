"use client";

import { createContext, useContext, useState } from "react";

const MushroomContext = createContext();

export const MushroomProvider = ({ children }) => {
  const [selectedMushroom, setSelectedMushroom] = useState(null);

  return (
    <MushroomContext.Provider value={{ selectedMushroom, setSelectedMushroom }}>
      {children}
    </MushroomContext.Provider>
  );
};

export const useMushroom = () => useContext(MushroomContext);
