/* eslint-disable react/prop-types */
import './CustomerOrder.css'
import lapiz from "../../assets/lapiz.svg"
import trash from "../../assets/trash.svg"

export default function CustomerOrder(props){
    return(
        <>
            <div className='ProductContainer'>
                <div className='InventoryText'>{props.text}</div>
                <img className='imgLapiz' src={lapiz}></img>
                <img className='imgTrash' src={trash}></img>
            </div>
        </>
    )
}