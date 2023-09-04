import './NitButton.css'
import plus from '@assets/plus.svg';
export default function NitButton({ onClick }) { 

    return (
        <>
            <div className='Nitbutton' onClick={onClick}>
                <img className='plusClass' src={plus}></img>
            </div>     
        </>            
    );
}
