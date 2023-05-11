import Header from '../components/header/header'
import PageTitle from '../components/PageTitle/PageTitle'
import SideBar from '../components/SideBar/SideBar'
import Input from '../components/Input/input'
import Boton from '../components/botones/botones'

import './MeasurePage.css'
export default function MeasurePage(){
    return(
        <>
            <Header></Header>
            <div className='MeasureContainer'>
                <SideBar TitleSide={'MANEJO DE PEDIDOS'}></SideBar>
                <div className='RightContainer'>
                    <PageTitle title={'Ingreso de Medidas'}></PageTitle>
                    <div className='whiteContainer'>
                        <div className='WhiteInternContainer'>
                            <div className='ContainerInputs'>
                                <div className='Column1'>
                                    <div className='TitleInputContainer1'>
                                        <div className='TitleInput'>Cliente</div>
                                        <Input clase={'input1'} value={'Nombre del cliente'}></Input>
                                    </div>    
                                    <div className='TitleInputContainer2'>
                                        <div className='TitleInput'>Medida Pecho</div>
                                        <Input clase={'input1'} value={'Medida Pecho'}></Input>
                                    </div>    
                                    <div className='TitleInputContainer2'>
                                        <div className='TitleInput'>Medida Cadera</div>
                                        <Input clase={'input1'} value={'Medida Cadera'}></Input>
                                    </div>  
                                    <div className='TitleInputContainer2'>
                                        <div className='TitleInput'>Medida largo de Camisa</div>
                                        <Input clase={'input1'} value={'Medida largo de Camisa'}></Input>
                                    </div>  
                                </div>
                                <div className='Column2'>
                                    <div className='TitleInputContainer3'>
                                        <div className='TitleInput'>Medida cuello</div>
                                        <Input clase={'input1'} value={'Medida cuello'}></Input>
                                    </div> 
                                    <div className='TitleInputContainer2'>
                                        <div className='TitleInput'>Medida cintura</div>
                                        <Input clase={'input1'} value={'Medida cintura'}></Input>
                                    </div>
                                </div>
                                <div className='Column2'>
                                    <div className='TitleInputContainer3'>
                                        <div className='TitleInput'>Medida de puño</div>
                                        <Input clase={'input1'} value={'Medida de puño'}></Input>
                                    </div> 
                                    <div className='TitleInputContainer2'>
                                        <div className='TitleInput'>Medida largo de manga</div>
                                        <Input clase={'input1'} value={'Medida largo de manga'}></Input>
                                    </div>
                                </div>
                            </div>
                            <div className='ContainerButtons'>
                                <Boton clase={'BotonGuardar'} text={'Guardar'}></Boton>
                                <Boton clase={'BotonCancelar'} text={'Cancelar'}></Boton>
                            </div> 
                        </div>                                            
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}