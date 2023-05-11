import React from "react";
import "./search.scss";

const Search = ({ setSearchText }) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="search by name"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
