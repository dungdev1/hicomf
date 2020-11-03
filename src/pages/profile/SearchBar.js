import React, { useState } from 'react';
import Button from '../../components/Button';

import './SearchBar.scss';

function SearchBar() {
  const [isShown, setIsShown] = useState(false);

  const handleSearch = () => {

  }

  return (
    <div className="SearchBar">
      {isShown && (
        <input type="text"
          className="SearchContent"
        />
      )}
      <Button
        className="button"
        iconName="search"
        fill="#D3D8E0"
        stroke="#D3D8E0"
        width="23.481"
        height="23.487"
        strokeWidth="1"
        onClick={handleSearch}
        onMouseEnter={() => setIsShown(true)}
      />
    </div>
  )
}

export default SearchBar;
