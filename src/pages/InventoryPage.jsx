import Header from '../components/header/header'
import PageTitle from '../components/PageTitle/PageTitle'
import SideBar from '../components/SideBar/SideBar'
import Boton from '../components/botones/botones'
import ProductInventory from '../components/ProductInventory/ProductInventory'

import './InventoryPage.css'
export default function InventoryPage(){
    return(
        <>
            <Header></Header>
            <div className='InventoryContainer'>
                <SideBar TitleSide={'MANEJO DE INVENTARIO'}></SideBar>
                <div className='RightContainer'>
                    <PageTitle title={'Inventario de Telas'}></PageTitle>
                    <div className='whiteContainer'>
                        <div className='WhiteInternContainer'>
                            <div className='Nose'>
                                <ProductInventory text={'Pieal de ángel'} cant={'50'}></ProductInventory>
                                <ProductInventory text={'Dacrón'} cant={'45'}></ProductInventory>
                                <ProductInventory text={'Seda'} cant={'55'}></ProductInventory>
                                <ProductInventory text={'Terciopelo'} cant={'30'}></ProductInventory>
                            </div>
                            <div className='ContainerButtons2'>
                                <Boton clase={'BotonGuardar'} text={'Guardar'}></Boton>
                                <Boton clase={'BotonAgregarNuevaTela'} text={'Agregar Nueva Tela'}></Boton>
                            </div> 
                        </div>
                    </div>
                </div>    
            </div>

        </>
    )
}
