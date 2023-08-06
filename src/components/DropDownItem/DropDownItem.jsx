import React, { useState } from 'react';
import "./DropDownItem.css";

function DropDownItem(props){
    const { options } = props;
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
    return(
        <>
        <div className="dropdown">
            <div className='TitleInp'>{props.title}</div>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">{props.selecttitle}</option>
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