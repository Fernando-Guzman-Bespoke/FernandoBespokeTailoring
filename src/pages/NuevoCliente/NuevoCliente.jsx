import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Button from '../../components/button/Button';
import Input from '../../components/Input/input';
import DateInput from '../../components/DateInput/Dateinput';
import RadioButtons from '../../components/Radiobuttons/Radiobuttons';
import './NuevoCliente.css'

function NuevoCliente(){
    return(
        <>
        <div>
            <PageTitle title={'Creación Nuevo Cliente'}/>
            <div className='WhiteContainer'>   
            <br/><br/>
                <div className='horizontal'>
                    <Input value={'Ingrese el nombre'} title={'Nombre'}/>
                    <Input value={'Ingrese el apellido'} title={'Apellido'}/>
                    <DateInput title={'Fecha de Nacimiento'}/>
                </div>
                <div className='MailContainer'>
                    <Input value={'Ingrese el correo electrónico'} title={'Correo electrónico'}/>
                    <RadioButtons title={'Género'} option1Label={'Femenino'} option2Label={'Masculino'}/>
                </div>
                <br/><br/><br/>
                <div className='buttonContainer'>
                    <Button text='Guardar'/>
                    <Button text='Cancelar'/>
                </div>
            </div>
        </div>  
        </>
    )
}
export default NuevoCliente