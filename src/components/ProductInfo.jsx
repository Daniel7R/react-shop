import React from 'react';
import Close from '@icons/icon_close.png';
import AddToCart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductInfo.scss';

const ProductInfo = () => {
    return (
        <aside className='product-detail'>
            <div className='product-detail-close'>
                <img src={Close} alt="close" />
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div className='product-info'>
                <p>$40</p>
                <p>bike</p>
                <p>With its practical position, this bike also fulfills a decorative funcion</p>
                <button className='primary-btn add-to-cart-btn' >
                    <img src={AddToCart} alt="add to cart" />
                    Añadir al carrito
                </button>
            </div>
        </aside>
    )
}

export {ProductInfo}
