import React from 'react';
import logo from '../../assets/Images/Logo.png';

function Logo() {
    return (
        <div className="h-[40px] w-[200px]">
            <img className="max-h-[100%] max-w-full" src={logo.src} alt="Brand Dealer Logo" />
        </div>
    );
}

export default Logo;
