import React, { useState } from 'react';
import './RadioButtons.css';

export default function RadioButtons(props) {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className='input-container'>
        <div className='TitleRadio'>{props.title}</div>
        <div className='Radio-Container'>
            <label>
            <input className='radio'
                type="radio"
                value={props.option1Value}
                checked={selectedOption === props.option1Value}
                onChange={handleOptionChange}
            />
            {props.option1Label}
            </label>
            <label className='radioRight'>
            <input
                type="radio"
                value={props.option2Value}
                checked={selectedOption === props.option2Value}
                onChange={handleOptionChange}
            />
            {props.option2Label}
            </label>
        </div>
      </div>
    </>
  );
}
