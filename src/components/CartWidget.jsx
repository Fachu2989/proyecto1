import carrito from './assets/carrito.svg'
import './assets/css.css'

export const CartWidget=()=>{
    return(
        <div>
            <img className='carrito' src={carrito} alt="carrito" />
            0
        </div>
    )
}