import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return (
        <div className='desktop-menu'>
            <ul>
                <li>
                    <a href='/orders' className='title'> Mis ordenes</a>
                </li>
                <li>
                    <a href="/account"> Mi cuenta</a>
                </li>
                <li>
                    <a href="/">Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    )
}

export {Menu}
