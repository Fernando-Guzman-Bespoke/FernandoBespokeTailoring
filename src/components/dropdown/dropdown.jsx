import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ items }) => {
  return (   
      <select className="dropdown__button">
        {items.map((item, index) => (
          <option key={index} className="dropdown__item">
            {item}
          </option>
        ))}
      </select>
   
  );
};

export default Dropdown;
