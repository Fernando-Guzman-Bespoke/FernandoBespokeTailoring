import { useState } from 'react';
import './input.css'

export default function Input(props){
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className='input-container'>
            <input className={props.clase} type="text" value={inputValue} onChange={handleChange} placeholder={props.value}/>
        </div>
    );
}