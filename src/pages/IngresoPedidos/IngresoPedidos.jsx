import React, { useState, useEffect  } from 'react';
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

function IngresoPedido() {
    const opciones =['Opcion1','Opcion2','Opcion3','Opcion4'];
    const opciones2 =[0,1,2,3,4];
    const [showInput, setShowInput] = useState(false);
    const { callFetch, result, loading } = useFetch();
    const [cliente, setCliente] = useState(0);
    const [clients, setClients] = useState([]);
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
    }

    useEffect(() => {
        const fetchClients = async () => {
            try {
                await callFetch({
                    uri: `${serverHost}/user/clientList`,
                    headers: { 'Content-Type': 'application/json' },
                    method: 'GET'
                });
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };
    
        fetchClients();
    }, []);
    
    useEffect(() => {
        if (result && result.result) {
            setClients(result.result); 
        } else if (result) {
            setClients(result);  
        }
    }, [result]); 
    
    
    
    const transformedClients = clients
  .filter(client => client.id_cliente && client.nombre) 
  .map(client => ({
    label: client.nombre,
    value: client.id_cliente
  }));

  if (loading) {
    return (
        <p>loading...</p>
    );
  }
    return( 
        <>  
        <div>
            <PageTitle title={'Ingreso de Pedido'}/>
            <div className='WhiteContainer'>    
            <div className='UnderTitle'>1. Datos Generales</div>            
                <div className='horizontal'>
                    <DropDownItem options={transformedClients} selecttitle={'Seleccione el nombre del cliente'} title={'Cliente'} selectedValue={cliente} onValueChange={setCliente}/>
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