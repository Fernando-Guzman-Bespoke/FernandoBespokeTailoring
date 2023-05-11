/* eslint-disable react/prop-types */
import './ProductInventory.css'
import lapiz from "../../assets/lapiz.svg"

export default function ProductInventory(props){
    return(
        <>
            <div className='ProductContainer'>
                <div className='InventoryText'>{props.text}</div>
                <div className='InventoryCant'>{props.cant} yd<sup>2</sup></div>
                <img className='imgLapiz' src={lapiz}></img>
            </div>
        </>
    )
}