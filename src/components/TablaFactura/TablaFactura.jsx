import React from 'react';
import './TablaFactura.css'

export default function TablaFactura({ pedido }){
    let totalPedido = 0;
    return(
        <>
            <table className="tabla-factura">
                <thead>
                    <tr>
                    <th>Descripción</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {pedido.map((item, index) => {
                        const descripcion = item[0];
                        const cantidad = item[1];
                        const precioUnitario = item[2];
                        const total = item[3];

                        totalPedido += total; 

                        return (
                        <tr key={index}>
                            <td>{descripcion}</td>
                            <td>{cantidad}</td>
                            <td>Q{precioUnitario}</td>
                            <td>Q{total}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='CantTotal'>
                <div className='Title'>Total</div>
                <div className='Title'>Q. {totalPedido}</div>
            </div>
        </>
    )
}