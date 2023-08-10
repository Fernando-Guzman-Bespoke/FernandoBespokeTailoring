import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import DropDownItem from '../../components/DropDownItem/DropDownItem';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/input';
import DateInput from '../../components/DateInput/Dateinput';
import Button from '../../components/button/Button';

function MedidasPantalon() {
    const opciones =['Opcion1','Opcion2','Opcion3','Opcion4'];
    return(
        <>  
        <div>
            <PageTitle title={'Ingreso de Medidas Pantalón'}/>
            <div className='WhiteContainer'>   
                <div className='horizontal2'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el nombre del cliente'} title={'Cliente'}/>
                    <DateInput title={'Fecha'} value={'Fecha de pedido'}/>
                </div>   
                <div className='horizontal3'>
                    <Input value={'Medida cintura en cm.'} title={'Medida cintura'}/>
                    <Input value={'Medida cadera en cm.'} title={'Medida cadera'}/>
                    <Input value={'Medida largo en cm.'} title={'Medida largo'}/>                   
                </div>
                <div className='horizontal3'>
                    <Input value={'Medida tiro en cm.'} title={'Medida tiro'}/>
                    <Input value={'Medida rodilla en cm.'} title={'Medida rodilla'}/>
                    <Input value={'Medida muslo en cm.'} title={'Medida muslo'}/>
                </div>
                <div className='horizontal3'>                    
                    <Input value={'Medida ruedo en cm.'} title={'Medida ruedo'}/>
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

export default MedidasPantalon;