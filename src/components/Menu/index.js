import React from 'react';
import logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="FBSFLIX Logo"></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>

        </nav>
    )
}

export default Menu;