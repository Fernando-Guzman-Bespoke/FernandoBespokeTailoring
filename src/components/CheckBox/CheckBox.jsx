import React, { useState } from 'react';
import './CheckBox.css';

export default function CheckBox({ isChecked, onCheckedChange, title }) {

    return (
        <div className='Checkbox-Container'>
            <input className='checkbox'
                type="checkbox"
                checked={isChecked}
                onChange={(e) => {
                    if (onCheckedChange) onCheckedChange(e.target.checked);
                }}
            />
            <div className='TitleCheckbox'>{title}</div>
        </div>
    );
}

