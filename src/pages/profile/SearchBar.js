import React from 'react';
import Button from '../../components/Button';

import './SearchBar.scss';

function SearchBar() {

  const handleSearch = () => {

  }

  return (
    <div className="SearchBar">
      <input type="text"
        className="SearchContent"
      />
      <Button         
        className="button"
        iconName="search" 
        fill="#D3D8E0"
        stroke="#D3D8E0"
        width="23.481" 
        height="23.487"
        strokeWidth="1"
        onClick={handleSearch}
      />
    </div>
  )
}

export default SearchBar;
