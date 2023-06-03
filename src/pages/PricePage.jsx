/* eslint-disable react/jsx-key */
import Header from '../components/header/header'
import PageTitle from '../components/PageTitle/PageTitle'
import SideBar from '../components/SideBar/SideBar'
import Input from '../components/Input/input'
import Boton from '../components/botones/botones'
import CantidadCotizacion from '../components/CantCotizacion/cantcotizacion'

import './PricePage.css'

export default function PricePage(){
    return(
        <>
            <Header></Header>
            <div className='PricePageContainer'>
                <SideBar TitleSide={'FACTURACIÓN'}></SideBar>
                <div className='RightContainer'>
                    <PageTitle title={'Cotización'}></PageTitle>
                    <div className='whiteContainer'>
                        <div className='WhiteInternContainer'>
                            <div className='divHorizontal'>

                                <div className='TextBoxContainer-left'>
                                    <p className='TextTitle'>Diseño</p>
                                    <div className='BoxContainer'>
                                        <div className='TextContainer'>
                                            <div className='text'>Traje Completo</div>
                                            <div className='subtext'>Caballero</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='TextBoxContainer-right'>
                                    <p className='TextTitle'>Tela</p>
                                    <div className='BoxContainer'>
                                        <div className='Onlytext'>Dracón</div>
                                        <div className='textCant'> 5 yd<sup>2</sup></div>
                                    </div>
                                </div>

                            </div>
                            <div className='divHorizontal'>

                                <div className='TextBoxContainer-left'>
                                    <p className='TextTitle'>Cliente</p>
                                    <div className='BoxContainer'>
                                        <div className='Onlytext'>Enrique Gonzáles</div>
                                    </div>
                                </div>
                                
                                <div className='TextBoxContainer-right'>
                                    <CantidadCotizacion></CantidadCotizacion>
                                    
                                </div>

                            </div>
                            <div className='divHorizontal'>

                                <div className='TextBoxContainer-left'>
                                    <p className='TextTitle'>Extra</p>
                                    <Input clase={'input2'} value={'Detalles extra (opcional)'}></Input>
                                </div>
                                <div className='Subtotal'>Subtotal: Q4,000.00</div>

                            </div>  

                            <div className='ContainerButtons3'>
                                <Boton clase={'BotonGuardarCotizacion'} text={'Guardar Cotización'}></Boton>
                                <Boton clase={'BotonCancelarCotizacion'} text={'Cancelar'}></Boton>
                                <Boton clase={'BotonhacerPedido'} text={'Hacer pedido'}></Boton>
                            </div> 

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}