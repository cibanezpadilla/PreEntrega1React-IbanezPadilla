import logoReact from '../../assets/Reactlogo.png'
import logo from '../../assets/logo.png'
import { Nav } from '../Nav/Nav'
import './Header.scss'

export const Header = () => {
  return (
    <header>
        <div className='cont_logo'>
          <img src={logoReact} className="logoReactHeader" alt="" />
          <img src={logo} className="logoStore" alt="" />
        </div>        
        <Nav/>        
    </header>
  )
}


