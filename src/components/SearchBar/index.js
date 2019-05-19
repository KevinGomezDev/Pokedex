import React from 'react';
import './searchBar.scss';

function SearchBar (props) {
  return <div className="nes-container with-title search-container">
    <p className="title">Search</p>
    <div className="nes-field">
      <input type="text" name='search' onChange={props.onSearch} className="nes-input" />
    </div>
  </div>
}

export default SearchBar;
