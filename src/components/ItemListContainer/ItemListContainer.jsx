import logoReact from '../../assets/logoceleste.png'

import './ItemListContainer.scss'



export const ItemListContainer = ({greeting}) => {
    return (
        <div className="contenedor_itemList"> 
            <img src={logoReact} className="logoReact" alt="" />
            <h1>{greeting}</h1>
            <p>Connecting the React community <br />sharing knowledge, resources and experiences</p>            
            <button>Get Started!</button>           
        </div>
    )
}