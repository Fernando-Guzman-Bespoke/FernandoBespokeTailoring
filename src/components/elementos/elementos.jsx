import './Elementos.css'
import tela1 from '../../assets/tela1.jpeg'
import tela2 from '../../assets/tela2.jpeg'
import tela3 from '../../assets/tela3.jpeg'
import tela4 from '../../assets/tela4.jpeg'
import tela5 from '../../assets/tela5.jpeg'
import tela6 from '../../assets/tela6.jpeg'
import tela7 from '../../assets/tela7.jpeg'
import tela8 from '../../assets/tela8.jpeg'
import tela9 from '../../assets/tela9.jpeg'
import tela10 from '../../assets/tela10.jpeg'

export default function Elementos(){
    return(
        <>
        <h1>Muestrario de Telas</h1>
        <div class="inner-container"> 
        
            <div class="elemento">
                <img src={tela1} alt="pic" />
                <p class="bold">Casimires</p>
                <p>Precio: Q.150.00</p>
            </div>
            <div class="elemento">
                <img src={tela3} alt="pic" />
                <p class="bold">Telas para camisería</p>
                <p>Precio: Q.50.00</p>
            </div>
            <div class="elemento">
                <img src={tela2} alt="pic" />
                <p class="bold">Tela para prenda de dama</p>
                <p>Precio: Q.40.00</p>
            </div>
            <div class="elemento">
                <img src={tela7} alt="pic" />
                <p class="bold">Tela para vestido de dama</p>
                <p>Precio: Q.125.00</p>
            </div>
            <div class="elemento">
                <img src={tela6} alt="pic" />
                <p class="bold">Casimir italiano</p>
                <p>Precio: Q.175.00</p>
            </div>
            <div class="elemento">
                <img src={tela5} alt="pic" />
                <p class="bold">Casimir de lana inglés</p>
                <p>Precio: Q.250.00</p>
            </div>            
            <div class="elemento">
                <img src={tela4} alt="pic" />
                <p class="bold">Telas para forros de saco</p>
                <p>Precio: Q.40.00</p>
            </div>
            <div class="elemento">
                <img src={tela8} alt="pic" />
                <p class="bold">Corduroy para prendas casuales</p>
                <p>Precio: Q.25.00</p>
            </div>  
            <div class="elemento">
                <img src={tela9} alt="pic" />
                <p class="bold">Casimir italiano A</p>
                <p>Precio: Q.200.00</p>
            </div>
            <div class="elemento">
                <img src={tela10} alt="pic" />
                <p class="bold">Tela REDA</p>
                <p>Precio: Q.1,000.00</p>
            </div>  
                      
        </div>

        <button>{'<'}</button>
        <button>{'>'}</button>
        </>
    )
}