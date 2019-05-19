import React from 'react';

function SearchBar (props) {
  return <div className="nes-container with-title search-container">
    <p className="title">Search</p>
    <div className="nes-field">
      <input type="text" name='search' className="nes-input" />
    </div>
  </div>
}

export default SearchBar