import React, {useContext} from 'react';
import Flecha from '@icons/flechita.svg';
import { OrderItem } from '@components/OrderItem';
import '@styles/MyOrder.scss';
import { AppContext } from '../context/AppContext';

const MyOrder = () => {

    const {state : {cart}} = useContext(AppContext);

    const calcularTotal = ()=>{
        
        let suma = 0;

        for(let i=0;i<cart.length;i++){
            suma= suma + cart[i].price;
        }

        return suma;
    }

    return (
        <aside className='my-order'>
            <div className="title-container">
                <img src={Flecha} alt="arrow" />
                <p className='title'>Mi orden</p>
            </div>
            <div className="my-order-content">
                {
                    cart.map(item => (
                        <OrderItem product={item} key={`order-item-${item.id}`} />
                    ))
                }
                
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${calcularTotal()}</p>
                </div>
                <button className='primary-btn'>Checkout</button>
            </div>
        </aside>
    )
}

export {MyOrder}
