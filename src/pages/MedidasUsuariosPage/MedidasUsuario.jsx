import React, { useState } from 'react';

import DropDownItem from '../../components/DropDownItem/DropDownItem';
import PageTitle from '../../components/PageTitle/PageTitle';
import MeasureValue from '../../components/MeasureValue/MeasureValue';
import './MedidasUsuario.css'
function MedidasUsuario (){
    const clientes =['cliente1','cliente2','cliente3','cliente4'];
    return(
        <>
        <div>
            <PageTitle title={'Medidas de Usuario'}/>
            <div className='WhiteContainer'>   
                <div className='horizontal2'>
                    <DropDownItem options={clientes} selecttitle={'Seleccione el nombre del cliente'} title={'Cliente'}/>
                </div>
                <div className='MeasureContainer'>          
                    <div className='garmentTitle'>Medidas Saco</div>
                    <div className='InternMeasurecontainer'>
                        <div className='mitad'>
                            <MeasureValue title={'Espalda'} value={'100'}/>
                            <MeasureValue title={'Hombro'} value={'100'}/>
                            <MeasureValue title={'Manga'} value={'100'}/>
                            <MeasureValue title={'Brazo'} value={'100'}/>
                            <MeasureValue title={'Cisa'} value={'100'}/>
                            <MeasureValue title={'Largo de frente'} value={'100'}/>
                        </div>
                        <div className='mitad'>
                            <MeasureValue title={'Puño'} value={'100'}/>
                            <MeasureValue title={'Pecho'} value={'100'}/>
                            <MeasureValue title={'Estomago'} value={'100'}/>
                            <MeasureValue title={'Cadera'} value={'100'}/>
                            <MeasureValue title={'Primer botón'} value={'100'}/>                            
                        </div>
                    </div>
                    <div className='garmentTitle'>Medidas Chalecho</div>
                    <div className='InternMeasurecontainer'>
                        <div className='mitad'>
                            <MeasureValue title={'Espalda'} value={'100'}/>
                            <MeasureValue title={'Hombro'} value={'100'}/>
                            <MeasureValue title={'Cisa'} value={'100'}/>
                            <MeasureValue title={'Brazo'} value={'100'}/>
                            <MeasureValue title={'Primer Botón'} value={'100'}/>
                            <MeasureValue title={'Estómago'} value={'100'}/>
                        </div>
                        <div className='mitad'>
                            <MeasureValue title={'Ruedo'} value={'100'}/>
                            <MeasureValue title={'Talle frente'} value={'100'}/>
                            <MeasureValue title={'Talle atrás'} value={'100'}/>
                            <MeasureValue title={'Punta'} value={'100'}/>
                            <MeasureValue title={'Largo frente'} value={'100'}/>
                            <MeasureValue title={'Largo atrás'} value={'100'}/>                            
                        </div>
                    </div>
                    <div className='garmentTitle'>Medidas Pantalón</div>
                    <div className='InternMeasurecontainer'>
                        <div className='mitad'>
                            <MeasureValue title={'Cintura'} value={'100'}/>
                            <MeasureValue title={'Cadera'} value={'100'}/>
                            <MeasureValue title={'Largo'} value={'100'}/>
                            <MeasureValue title={'Tiro'} value={'100'}/>
                        </div>
                        <div className='mitad'>
                            <MeasureValue title={'Rodilla'} value={'100'}/>
                            <MeasureValue title={'Muslo'} value={'100'}/>
                            <MeasureValue title={'Ruedo'} value={'100'}/>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    )
}

export default MedidasUsuario