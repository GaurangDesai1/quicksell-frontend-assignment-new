import React, { useState } from 'react';
import expandSymbol from '../images/expand.png';

const TopBar = ({ onGroupingChange, onSortingChange, selectedGroupingOption, selectedSortingOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="top-bar" style={{ backgroundColor: 'white' }}>
        <div className="display-dropdown">
          {/* Display button */}
          <button className='button-display' onClick={toggleDropdown}>
            Display <img src={expandSymbol} alt="Expand Symbol" className="symbol-icon" />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-content">

              <div className="dropdown-row">
                <label>Grouping</label>
                <select onChange={(e) => onGroupingChange(e.target.value)} value={selectedGroupingOption}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              <br></br>

              <div className="dropdown-row">
                <label>Ordering</label>
                <select onChange={(e) => onSortingChange(e.target.value)} value={selectedSortingOption}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
              
            </div>
          )}
        </div>
    </div>
  );
};

export default TopBar;
