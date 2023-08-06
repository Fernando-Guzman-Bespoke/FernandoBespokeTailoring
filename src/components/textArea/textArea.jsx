import React, { useState } from 'react';
import './textArea.css';

export default function InputTextArea(props) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
      };

  return (
    <>
        <div className='textArea-container'>
            <div className='TitleInp'>{props.title}</div>
            <textarea 
            value={inputValue}
            onChange={handleChange}
            placeholder={props.placeholder}
            rows={8}
            />
      </div>
    </>
  );
}
