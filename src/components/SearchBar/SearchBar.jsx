import React from "react";


const SearchBar = ({placeholder, data}) => {
  
  return (
    <div className="searchBar">
      <div className="searchInput">
        <input type="text" placeholder="" />
        <div className="searchIcon"></div>
      </div>
      <div className="dataResult"></div>
    </div>
  );
};

export default SearchBar;
