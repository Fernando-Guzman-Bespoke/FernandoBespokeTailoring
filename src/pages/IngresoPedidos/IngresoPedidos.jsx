import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import DropDownItem from '../../components/DropDownItem/DropDownItem';
import './IngresoPedidos.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/input';
import DateInput from '../../components/DateInput/Dateinput';
import Button from '../../components/button/Button';
import RadioButtons from '../../components/Radiobuttons/Radiobuttons';
import InputTextArea from '../../components/textArea/textArea';

function IngresoPedido() {
    const opciones =['Opcion1','Opcion2','Opcion3','Opcion4'];
    return(
        <>  
        <div>
            <PageTitle title={'Ingreso de Pedido'}/>
            <div className='WhiteContainer'>                
                <div className='horizontal'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el nombre del cliente'} title={'Cliente'}/>
                    <DateInput title={'Fecha'} value={'Fecha de pedido'}/>
                    <DateInput title={'Fecha de Entrega'}/>
                </div>
                <div className='UnderTitle'>Tela de Cuerpo</div>
                <div className='horizontal'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione la tela'} title={'Tela'}/>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el hilo'} title={'Hilo'}/>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el botón'} title={'Botón'}/>
                    <DropDownItem options={opciones} selecttitle={'Seleccione la etiqueta'} title={'Etiqueta'}/>
                </div>
                <div className='UnderTitle'>Tela de Combinación</div>
                <div className='horizontal'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione la tela de combinación'} title={'Tela'}/>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el color del ojal'} title={'Ojales'}/>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el color del hilo del botón'} title={'Hilo Botón'}/>
                    <Input value={'Ingrese las iniciales'} title={'Iniciales'}/>
                </div>
                <div className='horizontal-top'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione la entretela'} title={'Entrtela'}/>
                </div>
                <div className='UnderTitle'>Estilo</div>
                <div className='horizontal'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el tipo de cuello'} title={'Cuello'}/>
                    <RadioButtons title={'Botón en el Cuello'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Botón lateral'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <DropDownItem options={opciones} selecttitle={'Seleccione el tipo de puño'} title={'Puño'}/>
                </div>
                <div className='horizontal-top'>
                    <RadioButtons title={'Mancuerna doble'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Bolsa'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Costura p/Pluma'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Combinación'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                </div>      
                <div className='horizontal-top2'>
                    <RadioButtons title={'Iniciales'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Plaquet'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                </div>           
                <div className='UnderTitle'>Combinación de telas</div>
                <div className='horizontal'>
                    <RadioButtons title={'Cuello'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Collar interno'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Collar externo'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Plaquet'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Botonera'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                </div>
                <div className='horizontal-top'>
                    <RadioButtons title={'Bies de Botonera'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Orilla de plaquet'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Puño interno'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Puño externo'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                </div>    
                <div className='horizontal-top'>
                    <RadioButtons title={'Flecha'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Botonera flecha'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Trabita de Manga'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                    <RadioButtons title={'Coderas'} option1Value={'si'} option2Value={'no'} option1Label={'si'} option2Label={'no'}/>
                </div>   
                <div className='horizontal-top'>
                    <InputTextArea placeholder={'Notas'} title={'Notas'}/>
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

export default IngresoPedido;