import React, { useContext } from 'react';
import Add2Cart from '@icons/bt_add_to_cart.svg';
import '@styles/ProductItem.scss';
import { AppContext } from '../context/AppContext';

const ProductItem = ({product}) => {

    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }

    return (
        <div className='product-item'>
            <img src={product.images[0]} alt="Bike" />
            <div className="product-info">
                <div>
                    <p>${ product.price }</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={Add2Cart} alt="add to cart" />
                </figure>
            </div>
        </div>
    )
}

export {ProductItem}
