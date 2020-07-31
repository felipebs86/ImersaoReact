import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './Menu.scss'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="FBSFLIX Logo"></img>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>

        </nav>
    )
}

export default Menu;