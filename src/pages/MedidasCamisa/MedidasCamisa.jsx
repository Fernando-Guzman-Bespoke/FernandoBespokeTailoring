import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import DropDownItem from '../../components/DropDownItem/DropDownItem';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/input';
import DateInput from '../../components/DateInput/Dateinput';
import Button from '../../components/button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';
import './MedidasCamisa.css';

function MedidasCamisa() {
    const opciones2 =['Opcion1','Opcion2','Opcion3','Opcion4'];
    const [botonCuello, setBotonCuello] = useState(false);
    const [botonLateral, setBotonLateral] = useState(false);
    const [bolsa, setBolsa] = useState(false);
    const [costura, setCostura] = useState(false);
    const [combinación, setCombinación] = useState(false);
    const [plaquet, setPlaquet] = useState(false);
    const [cuello, setCuello] = useState(false);
    const [collarInterno, setCollarInterno] = useState(false);
    const [collarExterno, setCollarExterno] = useState(false);
    const [botonera, setBotonera] = useState(false);
    const [biesBotonera, setBiesBotonera] = useState(false);
    const [orillaPlaquet, setOrillaPlaquet] = useState(false);
    const [punoInterno, setPunoInterno] = useState(false);
    const [punoExterno, setPunoExterno] = useState(false);
    const [flecha, setFlecha] = useState(false);
    const [botoneraFlecha, setBotoneraFlecha] = useState(false);
    const [trabitaManga, setTrabitaManga] = useState(false);
    const [coderas, setCoderas] = useState(false);
    const [mancuernaDoble, setMancuernaDoble] = useState(false);
    const [puno, setPuno] = useState(0);

    return(
        <>  
        <div>
            <div className='WhiteContainer'>    
            
                <div className='UnderTitle'>Estilo</div>
                <div className="main-container">
                    <div className="checkbox-column">
                        <CheckBox title={'Botón en el Cuello'} isChecked={botonCuello} onCheckedChange={setBotonCuello}/>
                        <CheckBox title={'Botón lateral'} isChecked={botonLateral} onCheckedChange={setBotonLateral}/>
                        <CheckBox title={'Mancuerna doble'} isChecked={mancuernaDoble} onCheckedChange={setMancuernaDoble}/>
                        <CheckBox title={'Bolsa'} isChecked={bolsa} onCheckedChange={setBolsa}/>
                        <CheckBox title={'Costura p/Pluma'} isChecked={costura} onCheckedChange={setCostura}/>
                        <CheckBox title={'Combinación'} isChecked={combinación} onCheckedChange={setCombinación}/>
                        {/* <CheckBox title={'Iniciales'} isChecked={iniciales} onCheckedChange={setIniciales}/> */}
                        <CheckBox title={'Plaquet'} isChecked={plaquet} onCheckedChange={setPlaquet}/>
                        <CheckBox title={'Cuello'} isChecked={cuello} onCheckedChange={setCuello} />
                        <CheckBox title={'Collar interno'} isChecked={collarInterno} onCheckedChange={setCollarInterno}/>
                        <CheckBox title={'Collar externo'} isChecked={collarExterno} onCheckedChange={setCollarExterno}/>
                    </div>
                    <div className="checkbox-column">
                        <CheckBox title={'Botonera'} isChecked={botonera} onCheckedChange={setBotonera}/>
                        <CheckBox title={'Bies de Botonera'} isChecked={biesBotonera} onCheckedChange={setBiesBotonera}/>
                        <CheckBox title={'Orilla de plaquet'} isChecked={orillaPlaquet} onCheckedChange={setOrillaPlaquet}/>
                        <CheckBox title={'Puño interno'} isChecked={punoInterno} onCheckedChange={setPunoInterno}/>
                        <CheckBox title={'Puño externo'} isChecked={punoExterno} onCheckedChange={setPunoExterno}/>
                        <CheckBox title={'Flecha'} isChecked={flecha} onCheckedChange={setFlecha}/>
                        <CheckBox title={'Botonera flecha'} isChecked={botoneraFlecha} onCheckedChange={setBotoneraFlecha}/>
                        <CheckBox title={'Trabita de Manga'} isChecked={trabitaManga} onCheckedChange={setTrabitaManga}/>
                        <CheckBox title={'Coderas'} isChecked={coderas} onCheckedChange={setCoderas}/>
                    </div>
                    <div className="dropdown-column">
                        <div>
                            {/* <DropDownItem options={opciones2} selecttitle={'Seleccione el tipo de cuello'} title={'Cuello'} selectedValue={cuello} onValueChange={setCuello}/> */}
                            <DropDownItem options={opciones2} selecttitle={'Seleccione el tipo de puño'} title={'Puño'} selectedValue={puno} onValueChange={setPuno}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>            
        </>
    );
}

export default MedidasCamisa;