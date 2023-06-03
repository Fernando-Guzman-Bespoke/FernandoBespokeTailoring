import './cantcotizacion.css'
import imgplus from "../../assets/plus.svg"
import imgminus from "../../assets/minus.svg"
import {useState} from 'react'

export default function CantidadCotizacion(){
    const [cont, setCont] = useState(1)
    const funcplus = () =>{
        setCont(cont +1)
    }
    const funcminus = () =>{
        if(cont === 1){
            setCont(1)
        }else{
            setCont(cont-1)
        }  
    }
    return(
        <>
            <p className='TextTitle'>Cantidad</p>
            <div className='BoxContainerNums'>
                <img className='imgMinus' src={imgminus} onClick={funcminus}></img>
                <div className='num'>{cont}</div>
                <img className='imgPLus' src={imgplus} onClick={funcplus}></img>
            </div>
        </>
    )
}