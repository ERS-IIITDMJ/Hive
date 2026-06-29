import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({
  placeholder = "Search items, tools, components...",
  onSearch,
  className = "",
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  return (
<<<<<<< HEAD
    <div className={`relative w-full ${className}`}>
      <Search
        size={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
      />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-10 pl-11 pr-4 rounded-full bg-[#171510] border border-yellow-400/20 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-colors"
      />
=======
    <div className="absolute top-6 left-70 z-50">
      <div className="flex items-center bg-[#16120e] border border-[#5c462b] rounded-md px-3 py-1.5 w-[70vw] max-w-187.5">
        
        <svg 
          className="text-[#a69580] mr-2.5 shrink-0"
          xmlns="http://www.w3.org/2000/svg" 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          className="bg-transparent border-none outline-none text-white text-xs w-full placeholder-[#a69580]/80" 
          placeholder="Search items, tools, components..." 
        />
      </div>
>>>>>>> upstream/main
    </div>
  );
};

export default SearchBar;