import Header from '../components/header/header'
import PageTitle from '../components/PageTitle/PageTitle'
import SideBar from '../components/SideBar/SideBar'
import Boton from '../components/botones/botones'
import Dropdown from '../components/dropdown/dropdown'
import Input from '../components/Input/input'

import './MeasurePage.css'
export default function MeasurePage(){
    const Clientes = ['Seleccione el nombre del Cliente', 'Opción 2', 'Opción 3', 'Opción 4'];
    const Telas = ['Seleccione la tela','Opción 2', 'Opción 3', 'Opción 4'];
    const hilo =['Seleccione el hilo', 'Opción 2', 'Opción 3', 'Opción 4'];
    const boton =['Seleccione el botón','Opción 2', 'Opción 3', 'Opción 4'];
    const Etiqueta = ['Seleccione la etiqueta','Opción 2', 'Opción 3', 'Opción 4'];
    const Ojales =['Seleccione el color del ojal','Opción 2', 'Opción 3', 'Opción 4'];
    const HiloBoton =['Seleccione el color del hilo del botón','Opción 2', 'Opción 3', 'Opción 4'];

    return(
        <>
            <Header></Header>
            <div className='MeasureContainer'>
                <SideBar TitleSide={'MANEJO DE PEDIDOS'}></SideBar>
                <div className='RightContainer'>
                    <PageTitle title={'Ingreso Pedido'}></PageTitle>
                    <div className='whiteContainer'>
                        {/* <div className='WhiteInternContainer'> */}
                            
                            <div className='ContainerHorizontal'>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Cliente</div>
                                    <Dropdown items={Clientes}></Dropdown>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Fecha</div>
                                    <input type='date' className='input-date'></input>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Fecha de entrega</div>
                                    <input type='date' className='input-date'></input>
                                </div>
                            </div>
                            <div className='LineInternTitle'>Tela de Cuerpo</div>
                            <div className='ContainerHorizontal'>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Tela</div>
                                    <Dropdown items={Telas}></Dropdown>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Hilo</div>
                                    <Dropdown items={hilo}></Dropdown>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Botón</div>
                                    <Dropdown items={boton}></Dropdown>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Etiqueta</div>
                                    <Dropdown items={Etiqueta}></Dropdown>
                                </div>                                
                            </div>
                            <div className='LineInternTitle'>Tela de Combinación</div>
                            <div className='ContainerHorizontal'>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Tela</div>
                                    <Dropdown items={Telas}></Dropdown>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Ojales</div>
                                    <Dropdown items={Ojales}></Dropdown>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Hilo Botón</div>
                                    <Dropdown items={HiloBoton}></Dropdown>
                                </div>
                                <div className='InternContainer'>
                                    <div className='TitleInputContainer'>Iniciales</div>
                                    <Input clase='input1'></Input>
                                </div>                                
                            </div>
                            <div className='ContainerButtons'>
                                <Boton clase={'BotonGuardar'} text={'Guardar'}></Boton>
                                <Boton clase={'BotonCancelar'} text={'Cancelar'}></Boton>
                            </div> 
                        {/* </div>                                             */}
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}