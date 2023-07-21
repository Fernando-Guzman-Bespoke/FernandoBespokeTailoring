import Header from '../components/header/header'
import PageTitle from '../components/PageTitle/PageTitle'
import SideBar from '../components/SideBar/SideBar'
import Boton from '../components/botones/botones'
import Dropdown from '../components/dropdown/dropdown'
import Input from '../components/Input/input'

import './IngresoSaco.css'

export default function IngresoSaco(){
    const Clientes = ['Seleccione el nombre del Cliente', 'Opción 2', 'Opción 3', 'Opción 4'];

    return(
        <>
            <Header></Header>
            <div className='SacoContainer'>
                <SideBar TitleSide={'MEDIDAS DE SACO'}></SideBar>
                <div className='RightContainer'>
                    <PageTitle title={'Ingreso Medidas de Saco'}></PageTitle>
                    <div className='whiteContainer'>
                        <div className='ContainerHorizontal'>
                            <div className='InternContainer'>
                                <div className='TitleInputContainer'>Cliente</div>
                                <Dropdown items={Clientes}></Dropdown>
                            </div>
                            <div className='InternContainer'>
                                <div className='TitleInputContainer'>Fecha</div>
                                <input type='date' className='input-date'></input>
                            </div>
                        </div>
                        <div className='ContainerHorizontal'>
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida espalda</div>
                                <Input clase='input1'></Input>
                            </div>   
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida hombro</div>
                                <Input clase='input1'></Input>
                            </div>  
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida manga</div>
                                <Input clase='input1'></Input>
                            </div>  
                        </div>
                        <div className='ContainerHorizontal'>
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida brazo</div>
                                <Input clase='input1'></Input>
                            </div>   
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida cisa</div>
                                <Input clase='input1'></Input>
                            </div>  
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida Puño</div>
                                <Input clase='input1'></Input>
                            </div>  
                        </div>
                        <div className='ContainerHorizontal'>
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida pecho</div>
                                <Input clase='input1'></Input>
                            </div>   
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida estómago</div>
                                <Input clase='input1'></Input>
                            </div>  
                            <div className='InternContainer2'>
                                <div className='TitleInputContainer'>Medida Cadera</div>
                                <Input clase='input1'></Input>
                            </div>  
                        </div>
                        <div className='ContainerButtons'>
                                <Boton clase={'BotonGuardar'} text={'Guardar'}></Boton>
                                <Boton clase={'BotonCancelar'} text={'Cancelar'}></Boton>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}