import Header from '../components/header/header'
import SideBar from '../components/SideBar/SideBar'
import Elementos from '../components/elementos/elementos.jsx'

export default function MuestrarioTelas(){
    return(
        <>
            <Header></Header>
            <div class="main-container">
                <SideBar></SideBar>
                <div class="content-container">
                <Elementos></Elementos>
                </div>
            </div>
        </>
      
    )
}
