"use client";
import { useState } from "react";
import Link from "next/link";
import MushroomCard from "@/components/MushroomCard";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";
import Pill from "../../components/Pill";
import FilterSettings from "@/components/FilterSettings";
import Mushroom from "@/components/Mushroom";

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    tags: [],
    regions: [],
    category: []
  });

  const [mushrooms, setMushrooms] = useState([
    { imageSrc: "/icons/deathCapImg.png", title: "Death Cap", showWarning: true, category: "Poisonous", tags: "Favorites", region: "Texas" },
    { imageSrc: "/icons/puffballimg.png", title: "Puffball", showWarning: false, category: "Good for Broths", tags: "", region: "North America" },
    { imageSrc: "/icons/destroyingangelimg.png", title: "Destroying Angel", showWarning: true, category: "Poisonous", tags: "", region: "Europe" },
    { imageSrc: "/icons/falsedeathimg.png", title: "False Death Cap", showWarning: true, category: "Poisonous", tags: "", region: "Texas" },
    { imageSrc: "/icons/paddystrawimg.png", title: "Paddy Straw", showWarning: false, category: "Medicinal", tags: "", region: "Asia" }
  ]);

  const handleAddFavorite = (title) => {
    setMushrooms((prevMushrooms) =>
      prevMushrooms.map((mushroom) =>
        mushroom.title === title ? { ...mushroom, tags: "Favorites" } : mushroom
      )
    );
  };

  const filteredMushrooms = mushrooms.filter((mushroom) => {
    const matchesSearch = mushroom.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedFilters.tags.length === 0 || selectedFilters.tags.includes(mushroom.tags);
    const matchesRegion = selectedFilters.regions.length === 0 || selectedFilters.regions.includes(mushroom.region);
    const matchesCategory = selectedFilters.category.length === 0 || selectedFilters.category.includes(mushroom.category);
    return matchesSearch && matchesTags && matchesRegion && matchesCategory;
  });

  return (
    <div className="w-[414px] h-[896px] mx-auto bg-[#397367] shadow-lg overflow-hidden flex flex-col relative">
      <img src="/icons/mushroomDash.svg" alt="Mushroom Icon" className="absolute top-0 right-0 w-[276px] h-[276px] flex-shrink-0" />
      <div className="absolute top-16 left-6">
        <h2 className="text-white text-[24px] font-medium leading-[40px]">Hi,</h2>
        <h2 className="text-white text-[45px] font-extrabold leading-[40px]">Chantelle!</h2>
      </div>
      <div className="absolute top-[7rem] right-7 w-[41px] h-[41px] bg-[#5F464B] rounded-full flex items-center justify-center">
        <span className="text-white text-[20px] font-bold">C</span>
      </div>
      <div className="absolute bottom-0 w-[414px] h-[713px] bg-[#F2F2F2] rounded-t-[41px] flex flex-col pt-6 px-6">
        <Search onFilterClick={() => setIsFilterOpen(true)} onSearchChange={setSearchTerm} />
        <h2 className="text-[#324053] font-nunito text-[25px] font-bold mt-10 self-start">My Collection</h2>
        {selectedFilters.tags.length > 0 || selectedFilters.regions.length > 0 || selectedFilters.category.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-3 self-start">
            {selectedFilters.tags.map(tag => <Pill key={tag} label={tag} isSelected={true} />)}
            {selectedFilters.regions.map(region => <Pill key={region} label={region} isSelected={true} />)}
            {selectedFilters.category.map(category => <Pill key={category} label={category} isSelected={true} />)}
          </div>
        ) : null}
        <div className="grid grid-cols-3 gap-4 mt-6 justify-center">
          {filteredMushrooms.length > 0 ? (
            filteredMushrooms.map((mushroom, index) => (
              <MushroomCard 
                key={index}
                imageSrc={mushroom.imageSrc}
                title={mushroom.title}
                showWarning={mushroom.showWarning}
                tags={mushroom.tags}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-3 mt-6">No mushrooms found.</p>
          )}
        </div>
      </div>
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100]">
          <div className="w-[380px] h-[806px] bg-[#F2F2F2] rounded-[20px] flex flex-col p-6 shadow-lg z-[110] relative">
            <FilterSettings 
              onClose={() => setIsFilterOpen(false)}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters} 
            />
          </div>
        </div>
      )}
      <NavBar className="z-[50]" />
    </div>   
  );
}