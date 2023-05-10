import './header.css'
import suit from "../../assets/suit.svg";
export default function Header(){
    return(
        <>
        <div className='header'>
            <img className='Suit' src={suit}></img>            
            <div className='ContentText'>
                <div className='Name'>
                    Fernando Guzmán
                </div>
                <div className='EmpresaName'>
                    Bespoke Tailoring
                </div>
                 
            </div>
        </div>
        </>
    )
}