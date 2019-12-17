import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ handleChange, placeholder }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;