import React from 'react';
import logo from '../../assets/Images/Logo.png';

function Logo() {
    return (
        <div className="h-[40px] w-[200px]">
            <img src={logo.src} alt="Brand Dealer Logo" />
        </div>
    );
}

export default Logo;
