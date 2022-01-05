import React from 'react';
import '@styles/ShoppingCartItem.scss';

const ShoppingCartitem = () => {
    return (
        <div className='shopping-cart-item'>
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Bike" />
                <p>Bike</p>
                <p>$30,00</p>
            </figure>
        </div>
    )
}

export {ShoppingCartitem}
