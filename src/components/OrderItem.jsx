import React, {useContext} from 'react';
import Close from '@icons/icon_close.png';
import '@styles/OrderItem.scss';
import { AppContext } from '../context/AppContext';

const OrderItem = ({product}) => {

    const { deleteFromCart } = useContext(AppContext);

    return (
        <div className='order-item'>
            <figure>
                <img src={ product.images[0] } alt={product.title} />    
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img onClick={()=> deleteFromCart(product)} src={Close} alt='close'/>
        </div>
    )
}

export {OrderItem}
