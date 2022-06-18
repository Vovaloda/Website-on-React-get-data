import React from 'react'
import logo from '../../assets/image/logo.png'
import { menu } from './menu';
import { Link } from 'react-router-dom';

import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className={logo}>
                <img src={logo} alt='A' height="100px" />
            </div>
            <div className="wrapper">
                <ul className='menu'>
                    {menu.map((item, index) => (
                        <li key={`menu item ${index}`}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="buttons">
                <button className="loginButton">Login</button>
                <button className="signUpButton">Sign up</button>
            </div>
            </div>
        </div>
    );
}

export default Header;  