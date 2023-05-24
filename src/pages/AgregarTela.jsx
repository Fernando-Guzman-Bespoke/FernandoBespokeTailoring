import Header from '../components/header/header'
import SideBar from '../components/SideBar/SideBar'
import Boton from '../components/botones/botones'
import Input from '../components/Input/input'
import './AgregarTela.css'
import subirImagen from "../assets/subir_imagen.png"

export default function AgregarTela(){
    return(
        <>
            <Header></Header>
            <div class="main-container">
                <SideBar></SideBar>
                <div class="content-container">
                <h1>Agregar una tela</h1>
                <div class="inner-container">
                
                    <div class="content">
                        <div class="text-container">
                            <h3>Tela</h3>
                            <Input clase={'input1'} value={'Nombre de la tela'}></Input>
                            <h3>Lugar de procedencia</h3>
                            <Input clase={'input1'} value={'Lugar de procedencia'}></Input>
                            <h3>Precio de la tela</h3>

                            <Input clase={'input1'} value={'Precio'}></Input>
                            <h3>Cantidad de Ingreso</h3>
                            <Input clase={'input1'} value={'Cantidad de yd^2  ingresadas'}></Input>

                        </div>
                    
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                        <button class="image-button" onClick={() => document.getElementById('fileInput').click()}>
                            <img src={subirImagen} alt="Subir imagen" />
                        </button>

                    </div>

                    <div class="button-container">
                        <Boton clase={'BotonGuardar2'} text={'Guardar'}></Boton>
                        <Boton clase={'BotonGuardar2'} text={'Cancelar'}></Boton>
                    </div>
                </div>
                </div>
            </div>
        </>
      
    )
}
