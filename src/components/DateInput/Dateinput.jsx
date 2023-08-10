import { useState } from 'react';
import './Dateinput.css'

export default function DateInput(props){
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <>
            <div className='date-input-container'>
                <div className='TitleInp'>{props.title}</div>
                <input  type="date" value={inputValue} onChange={handleChange} placeholder={props.value}
            />
            </div>     
        </>            
    );
}