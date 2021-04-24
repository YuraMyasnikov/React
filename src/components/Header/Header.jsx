import React from 'react';
import Logo from './Logo/Logo';
import './header.css';
import  h from './header.module.css';

const Header = () => {
    return (
        <div className="header">
           <Logo />
        </div>
    );
}

export default Header;