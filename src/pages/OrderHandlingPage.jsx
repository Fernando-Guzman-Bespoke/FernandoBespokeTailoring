/* eslint-disable react/jsx-key */
import Header from '../components/header/header'
import PageTitle from '../components/PageTitle/PageTitle'
import SideBar from '../components/SideBar/SideBar'
import CustomerOrder from '../components/CustomerOrder/CustomerOrder'

import './OrderHandlingPage.css'

export default function OrderHandlingPage(){
    const Users =['Julio Molina','Nombre Cliente','Nombre Cliente','Nombre Cliente','Nombre Cliente','Nombre Cliente','Nombre Cliente','Nombre Cliente']
    return(
        <>
            <Header></Header>
            <div className='OrderHandlingContainer'>
                <SideBar TitleSide={'MANEJO DE PEDIDOS'}></SideBar>
                <div className='RightContainer'>
                    <PageTitle title={'Listado de Pedidos'}></PageTitle>
                    <div className='whiteContainer'>
                        <div className='WhiteInternContainer'>
                                {
                                    Users.map(user =>{
                                        return <CustomerOrder text={user}></CustomerOrder>
                                    })
                                }
                               
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}