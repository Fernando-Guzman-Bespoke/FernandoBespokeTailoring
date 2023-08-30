import React, { useState } from 'react';
import "./DropDownItem.css";

function DropDownItem({ options, title, selecttitle, selectedValue, onValueChange }) {   
    return (
        <>
        <div className="dropdown">
            <div className='Title'>{title}</div>
            <select value={selectedValue} onChange={(e) => onValueChange(e.target.value)}>
                <option value="">{selecttitle}</option>
                {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>
        </div>
        </>
    );
}


export default DropDownItem;