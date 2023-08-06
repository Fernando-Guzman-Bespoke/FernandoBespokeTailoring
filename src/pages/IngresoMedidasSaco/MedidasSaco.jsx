import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import DropDownItem from '../../components/DropDownItem/DropDownItem';
import './MedidasSaco.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/input';
import DateInput from '../../components/DateInput/Dateinput';
import Button from '../../components/button/Button';

function MedidasSaco() {
    const opciones =['Opcion1','Opcion2','Opcion3','Opcion4'];
    return(
        <>  
        <div>
            <PageTitle title={'Ingreso de Medidas Saco'}/>
            <div className='WhiteContainer'>   
                <div className='horizontal2'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el nombre del cliente'} title={'Cliente'}/>
                    <DateInput title={'Fecha'} value={'Fecha de pedido'}/>
                </div>   
                <div className='horizontal3'>
                    <Input value={'Medida espalda en cm.'} title={'Medida espalda'}/>
                    <Input value={'Medida hombro en cm.'} title={'Medida hombro'}/>
                    <Input value={'Medida manga en cm.'} title={'Medida manga'}/>                   
                </div>
                <div className='horizontal3'>
                    <Input value={'Medida brazo en cm.'} title={'Medida brazo'}/>
                    <Input value={'Medida cisa en cm.'} title={'Medida cisa'}/>
                    <Input value={'Medida puño en cm.'} title={'Medida puño'}/>                    
                </div>
                <div className='horizontal3'>                    
                    <Input value={'Medida pecho en cm.'} title={'Medida pecho'}/>
                    <Input value={'Medida estomago en cm.'} title={'Medida estomago'}/>
                    <Input value={'Medida cadera en cm.'} title={'Medida cadera'}/>
                </div>   
                <div className='horizontal4'>                    
                    <Input value={'Medida largo de frente en cm.'} title={'Medida largo de frente'}/>
                    <Input value={'Medida primer botón en cm.'} title={'Medida primer botón'}/>
                </div>        
                <div className='buttonContainer'>
                    <Button text='Guardar'/>
                    <Button text='Cancelar'/>
                </div>
                
            </div>
        </div>            
        </>
    );
}

export default MedidasSaco;