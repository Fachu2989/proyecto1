import mercado from "./assets/mercado.avif"
import { CartWidget } from "./CartWidget"
import './assets/css.css'


export const NavBar = ()=>{
    return (
        <nav>
            <img className="mercado" src={mercado} alt="mercado" sizes="4 rem"/>
            
            <div className="categorias">
                <button>Carniceria</button>
                <button>Polleria</button>
                <button>Cerdo</button>
            </div>
            
            <CartWidget/>
        </nav>
    )
}

