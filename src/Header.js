import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Header.css';
import logo from './HBspace.jpg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="Header">
            <div className="logo">
                <div className="logo-icon"><img src={logo} alt="logo" height={60} width={60}/></div>
                <span className="title"><b>HB SPACE TL</b></span>
            </div>
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <a href="#about"><b>About</b></a>
                <a href="#events"><b>Events</b></a>
                <a href="#donate"><b>Donate</b></a>
                <a href="#projects"><b>Projects</b></a>
                <a href="#Log in"><b>Log in</b></a>
                <a href="#sign up"><b>Sign up</b></a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars size="24" />
            </div>
        </header>
    );
};

export default Header;
