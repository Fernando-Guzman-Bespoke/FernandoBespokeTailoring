import './Button.css'

export default function Button({ text, onClick }) { 
    return (
        <>
            <div className='button' onClick={onClick}>
                {text}
            </div>     
        </>            
    );
}
