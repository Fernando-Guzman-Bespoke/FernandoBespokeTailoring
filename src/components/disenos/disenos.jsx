import './Disenos.css'
import diseno1 from '../../assets/diseno1.jpeg'
import diseno2 from '../../assets/diseno2.jpeg'
import diseno3 from '../../assets/diseno3.jpeg'
import diseno4 from '../../assets/diseno4.jpeg'
import diseno5 from '../../assets/diseno5.jpeg'
import diseno6 from '../../assets/diseno6.jpeg'
import diseno7 from '../../assets/diseno7.jpeg'
import diseno8 from '../../assets/diseno8.jpeg'

export default function Elementos(){
    return(
        <>
        <h1>Muestrario de Diseños</h1>
        <div class="inner-container"> 
        
            <div class="elemento">
                <img src={diseno1} alt="pic" />
                <p class="bold">Diseño Herrinbone</p>
                <p>Precio: Q.500.00</p>
            </div>
            <div class="elemento">
                <img src={diseno2} alt="pic" />
                <p class="bold">Colección Loving Italy</p>
                <p>Precio: Q.700.00</p>
            </div>
            <div class="elemento">
                <img src={diseno3} alt="pic" />
                <p class="bold">Camisa personalizada</p>
                <p>Precio: Q.700.00</p>
            </div>
            <div class="elemento">
                <img src={diseno4} alt="pic" />
                <p class="bold">Zafari</p>
                <p>Precio: Q.1200.00</p>
            </div>
            <div class="elemento">
                <img src={diseno5} alt="pic" />
                <p class="bold">Zafari Tabaco</p>
                <p>Precio: Q.1200.00</p>
            </div>
            <div class="elemento">
                <img src={diseno7} alt="pic" />
                <p class="bold">Jacket Zafari</p>
                <p>Precio: Q.700.00</p>
            </div>            
            <div class="elemento">
                <img src={diseno6} alt="pic" />
                <p class="bold">Blusas Seda</p>
                <p>Precio: Q.2500.00</p>
            </div>
            <div class="elemento">
                <img src={diseno8} alt="pic" />
                <p class="bold">Jacket Seda cruda</p>
                <p>Precio: Q.1200.00</p>
            </div>  
                      
        </div>

        <button>{'<'}</button>
        <button>{'>'}</button>
        </>
    )
}