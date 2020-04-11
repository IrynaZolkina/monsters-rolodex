import React from "react";

const SearchBox = ({ placeholder, onSearchChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchBox;
