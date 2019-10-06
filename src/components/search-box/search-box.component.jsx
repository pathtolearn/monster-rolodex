import React from "react";

import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={e => handleChange(e.target.value)}
    />
  );
};
