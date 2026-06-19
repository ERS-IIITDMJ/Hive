import React from 'react';
//import './SearchBar.css'; If you are using a separate CSS file for Figma metrics

function SearchBar(){
  return (
    <div className="searchbar-container">
    
      <input 
        type="text" 
        className="searchbar-input" 
        placeholder="Search inventory, components, tools..." 
      />
      
      <button type="button" className="searchbar-button">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;