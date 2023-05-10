import './SideBar.css'
import AdminUser from "../../assets/adminuser.svg";
export default function SideBar(){
    return(
        <>
            <div className='SideBar'>  
                <div className='BoxUser'>
                    <img className='ImgAdminUser' src={AdminUser}></img>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}