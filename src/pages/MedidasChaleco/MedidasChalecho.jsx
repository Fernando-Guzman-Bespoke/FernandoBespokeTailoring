import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import DropDownItem from '../../components/DropDownItem/DropDownItem';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/input';
import DateInput from '../../components/DateInput/Dateinput';
import Button from '../../components/button/Button';

function MedidasChaleco() {
    const opciones =['Opcion1','Opcion2','Opcion3','Opcion4'];
    return(
        <>  
        <div>
            <PageTitle title={'Ingreso de Medidas Chaleco'}/>
            <div className='WhiteContainer'>   
                <div className='horizontal2'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el nombre del cliente'} title={'Cliente'}/>
                    <DateInput title={'Fecha'} value={'Fecha de pedido'}/>
                </div>   
                <div className='horizontal3'>
                    <Input value={'Medida espalda en cm.'} title={'Medida espalda'}/>
                    <Input value={'Medida hombro en cm.'} title={'Medida hombro'}/>
                    <Input value={'Medida cisa en cm.'} title={'Medida cisa'}/>                   
                </div>
                <div className='horizontal3'>
                    <Input value={'Medida brazo en cm.'} title={'Medida brazo'}/>
                    <Input value={'Medida primer botón en cm.'} title={'Medida primer botón'}/>
                    <Input value={'Medida estomago en cm.'} title={'Medida estomago'}/>
                </div>
                <div className='horizontal3'>                    
                    <Input value={'Medida ruedo en cm.'} title={'Medida ruedo'}/>
                    <Input value={'Medida talle frente en cm.'} title={'Medida talle frente'}/>
                    <Input value={'Medida talle atrás en cm.'} title={'Medida talle atrás'}/>
                </div>       
                <div className='horizontal3'>                    
                    <Input value={'Medida punta en cm.'} title={'Medida punta'}/>
                    <Input value={'Medida largo frente en cm.'} title={'Medida largo frente'}/>
                    <Input value={'Medida largo atrás en cm.'} title={'Medida largo atrás'}/>
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

export default MedidasChaleco;