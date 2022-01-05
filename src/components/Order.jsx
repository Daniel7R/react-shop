import React from 'react';
import Flecha from '@icons/flechita.svg';
import '@styles/Order.scss';

const Order = () => {
    return (
        <div className='order'>
            <p>
                <span>01.03.22</span>
                <span>6 Articles</span>
            </p>
            <p>$560,00</p>
            <img src={Flecha} alt="arrow" />
        </div>
    )
}

export {Order}
