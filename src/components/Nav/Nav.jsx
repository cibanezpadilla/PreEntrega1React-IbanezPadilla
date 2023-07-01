
import './Nav.scss'
import { CartWidget } from '../CartWidget/CartWidget'

export const Nav = () => {
  return (
    <div className="nav">
        <ul className="nav__items">
            <li className="nav__item"><a href="#">Learn</a></li>            
            <li className="nav__item"><a href="#">Community</a></li>
            <li className="nav__item"><a href="#">Merchandasing</a></li>
        </ul>
        <CartWidget/>
    </div>    
  )
}


