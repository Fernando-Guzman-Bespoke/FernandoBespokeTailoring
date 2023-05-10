import './SideBar.css'
import AdminUser from "../../assets/adminuser.svg";
export default function SideBar(){
    return(
        <>
            <div className='SideBar'>  
                <div className='BoxUser'>
                    <img className='ImgAdminUser' src={AdminUser}></img>
                    <div className='BoxUserText'>
                        <div className='UserText'>User</div>
                        <div className='AdminText'>Admin</div>
                    </div>
                </div>
                <div className='Boxpedidos'>
                    <div className='TitlePedidos'>MANEJO DE PEDIDOS</div>
                    <div className='ModulosText'>Módulo 2</div>
                    <div className='ModulosText'>Módulo 3</div>
                    <div className='ModulosText'>Módulo 4</div>
                </div>
                
            </div>
        </>
    )
}