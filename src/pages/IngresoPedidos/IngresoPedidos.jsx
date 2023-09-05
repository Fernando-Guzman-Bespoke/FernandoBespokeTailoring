import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import DropDownItem from '../../components/DropDownItem/DropDownItem';
import './IngresoPedidos.css';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/input';
import DateInput from '../../components/DateInput/Dateinput';
import Button from '../../components/button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';
import InputTextArea from '../../components/textArea/textArea';
import useFetch  from '../../hooks/useFetch'
import { serverHost } from '../../config';
// import { useNavigate } from 'react-router';

function IngresoPedido() {
    const opciones =['Opcion1','Opcion2','Opcion3','Opcion4'];
    const opciones2 =[0,1,2,3,4];
    const [showInput, setShowInput] = useState(false);
    const { callFetch } = useFetch();
    // const navigate = useNavigate();
    const [cliente, setCliente] = useState(0);
    const [fechaPedido, setFechaPedido] = useState(new Date());
    const [fechaEntrega, setFechaEntrega] = useState(new Date());
    const [telaCuerpo, setTelaCuerpo] = useState(0);
    const [hiloCuerpo, setHiloCuerpo] = useState(0);
    const [botonCuerpo, setBotonCuerpo] = useState(0);
    const [etiqueta, setEtiqueta] = useState(0);
    const [telaCombinación, setTelaCombinación] = useState(0);
    const [ojalesCombinación, setOjalesCombinación] = useState(0);
    const [hiloBotón, setHiloBotón] = useState(0);
    const [entretela, setEntretela] = useState(0);
    const [puno, setPuno] = useState(0);
    const [notas, setNotas] = useState("");
    const [botonCuello, setBotonCuello] = useState(false);
    const [botonLateral, setBotonLateral] = useState(false);
    const [bolsa, setBolsa] = useState(false);
    const [costura, setCostura] = useState(false);
    const [combinación, setCombinación] = useState(false);
    const [iniciales, setIniciales] = useState("");
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
    const [error, setError] = useState(null);


    const handleSave = async () => {
        const payload = {
            cliente_id: cliente,
            fecha: fechaPedido,
            fecha_entrega: fechaEntrega,
            tela_cuerpo_id: telaCuerpo,
            hilo_cuerpo_id: hiloCuerpo,
            boton_cuerpo_id: botonCuerpo ? 1 : 0, 
            etiqueta_cuerpo_id: etiqueta,
            tela_combinacion_id: telaCombinación,
            ojales_combinacion_id: ojalesCombinación,
            hilo_boton_combinacion_id: hiloBotón,
            entretela_combinacion_id: entretela,
            iniciales: iniciales,
            boton_en_cuello: botonCuello,
            boton_lateral: botonLateral,
            mancuerna_doble: mancuernaDoble,
            bolsa: bolsa,
            costura_p_pluma: costura,
            combinacion: combinación, 
            plaquet: plaquet,
            cuello: cuello,
            collar_interno: collarInterno,
            collar_externo: collarExterno, 
            botonera: botonera,
            bies_de_botonera: biesBotonera, 
            orilla_de_plaquet: orillaPlaquet,
            puno_interno: punoInterno,
            puno_externo: punoExterno,
            flecha: flecha,
            botonera_flecha: botoneraFlecha,
            trabita_de_manga: trabitaManga,
            coderas: coderas,
            notas: notas,
        };
        try {
            await callFetch({
                uri:  `${serverHost}/order/createPedido`, 
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json',
                  },
            });
        }catch (ex) {
            setError(ex.status === 400 ? 'Datos incorrectos.' : 'Error de conexión.');
        }
        // navigate("/ruta_tras_guardar");
    }


    return(
        <>  
        <div>
            <PageTitle title={'Ingreso de Pedido'}/>
            <div className='WhiteContainer'>    
            <div className='UnderTitle'>1. Datos Generales</div>            
                <div className='horizontal'>
                    <DropDownItem options={opciones2} selecttitle={'Seleccione el nombre del cliente'} title={'Cliente'} selectedValue={cliente} onValueChange={setCliente}/>
                    <DateInput title={'Fecha'} value={'Fecha de pedido'}/>
                    <DateInput title={'Fecha de Entrega'}/>
                </div>
                <div className='UnderTitle'>2. Telas</div>
                <div className="row">
                    <div className="column">
                        <div className='Subtitle'><p>Cuerpo</p></div>
                        <div>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione la tela'} title={'Tela'} selectedValue={telaCuerpo} onValueChange={setTelaCuerpo}/>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione el hilo'} title={'Hilo'} selectedValue={hiloCuerpo} onValueChange={setHiloCuerpo}/>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione el botón'} title={'Botón'} selectedValue={botonCuerpo} onValueChange={setBotonCuello}/>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione la etiqueta'} title={'Etiqueta'} selectedValue={etiqueta} onValueChange={setEtiqueta}/>
                        </div>
                    </div>
                    <div className="column">
                        <div className='Subtitle'><p>Combinación</p></div>
                        <div>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione la tela de combinación'} title={'Tela'} selectedValue={telaCombinación} onValueChange={setTelaCombinación}/>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione el color del ojal'} title={'Ojales'} selectedValue={ojalesCombinación} onValueChange={setOjalesCombinación}/>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione el color del hilo del botón'} title={'Hilo Botón'} selectedValue={hiloBotón} onValueChange={setHiloBotón}/>
                            <DropDownItem options={opciones2} selecttitle={'Seleccione la entretela'} title={'Entretela'} selectedValue={entretela} onValueChange={setEntretela}/>
                            <CheckBox 
                                title={'Iniciales'}
                                isChecked={showInput}
                                onCheckedChange={(checked) => setShowInput(checked)}
                            />
                            {showInput && <Input value={'Ingrese las iniciales'} title={'Iniciales'}/>}
                            {/* <Input value={'Ingrese las iniciales'} title={'Iniciales'}/> */}
                        </div>
                    </div>
                </div>
                {/* <div className='horizontal-top'>
                    <DropDownItem options={opciones} selecttitle={'Seleccione la entretela'} title={'Entrtela'}/>
                </div> */}
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

                <div className='horizontal-top'>
                    <InputTextArea placeholder={'Notas'} title={'Notas'}/>
                </div>               

                <div className='buttonContainer'>
                    <Button text='Guardar'onClick={handleSave}/>
                    <Button text='Cancelar'/>
                </div>
                
            </div>
        </div>            
        </>
    );
}

export default IngresoPedido;