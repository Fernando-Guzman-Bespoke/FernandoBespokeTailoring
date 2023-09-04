import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/button/Button';
import Input from '../../components/Input/input';
import NitButton from '../../components/NitButton/NitButton';
import Popup from '../../components/popupFactura/Popup';
import TablaFactura from '../../components/TablaFactura/TablaFactura';
import './facturacion.css';


function Facturacion(){
    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
      setShowPopup(!showPopup);
    }
    const Pedido = [
        ['Traje Completo', 1, 4000, 4000],
        ['Corbata lisa', 2, 300, 600]
    ]
    return(
        <>
        <div>
            <PageTitle title={'Facturación'}/>
            <div className='WhiteContainer'>   
                <div className='horizontal2'>
                    <div className="Vertical1">
                        <Input value={'Nombre cliente'} title={'Nombre'}/>
                        <div className='NitContainer'>
                            <Input value={'Nit cliente'} title={'Nit'}/>
                            <NitButton onClick={togglePopup} />
                        </div>                        
                        <Input value={'Dirección'} title={'Dirección'}/>
                    </div>
                    <div className="Vertical2">
                        <TablaFactura pedido={Pedido} />

                    </div>
                </div>
                <div className='buttonContainer'>
                    <Button text='Guardar'/>
                    <Button text='Cancelar'/>
                </div>
            </div>
        </div>  
        {showPopup && <Popup onClose={togglePopup} />}
          
        </>
    )
}

export default Facturacion;