import Header from '../components/header/header'
import SideBar from '../components/SideBar/SideBar'
import Disenos from '../components/disenos/disenos'
import '../components/disenos/Disenos.css'

export default function MuestrarioTelas(){
    return(
        <>
            <Header></Header>
            <div class="main-container">
                <SideBar></SideBar>
                <div class="content-container">
                <Disenos></Disenos>
                </div>
            </div>
        </>
      
    )
}
