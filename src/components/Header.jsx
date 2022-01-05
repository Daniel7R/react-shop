import React,{ useState, useContext } from 'react';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import cartImage from '@icons/icon_shopping_cart.svg';
import { Menu } from '@components/Menu';
import '@styles/Header.scss';
import { AppContext } from '../context/AppContext';
import { MyOrder } from '@containers/MyOrder';

const Header = () => {

    const [toggle,setToggle] = useState(false);
    const [toggleOrders,setToggleOrders] = useState(false);
    const {state: {cart}} = useContext(AppContext);

    const handleToggle = ()=>{
        setToggle(!toggle);
    }
    return (
        <nav>
            <img src={menu} alt="menu" className='menu' />
            <div className='navbar-left'>
                <img src={logo} alt="logo" className='logo-navbar' />
                <ul>
                    <li> 
                        <a href='/'>Todo</a> 
                    </li>
                    <li>
                        <a href='/'>Ropa</a>
                    </li>
                    <li>
                        <a href='/'>Electrónicos</a>
                    </li>
                    <li>
                        <a href='/'>Juguetes</a>
                    </li>
                    <li>
                        <a href='/'>Otros</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        correo@prueba.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={()=> setToggleOrders(!toggleOrders)}>
                        <img src={cartImage} alt="shopping-cart" />
                        <div>{cart.length}</div>
                    </li>
                </ul>
            </div>
            {
                toggle && <Menu />
            }
            {
                toggleOrders && <MyOrder/>
            }
        </nav>
        
    )
}

export { Header };