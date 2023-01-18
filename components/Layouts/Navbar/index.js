import React from 'react';
import SecondaryButton from '../../Button/Secondary';
import Logo from '../../Logo';

function Navbar() {
    
    return (
        <div className="navContainer w-[100%] flex items-center justify-center mt-[1rem]">
            <div className="wrapper flex items-center justify-between w-[90%]">
                <div className="logo">
                    <Logo />
                </div>
                <div className="bars flex align-center justify-center flex-col">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <nav className="flex align-center justify-between hidden">
                    <div className="cross">❌</div>
                    <a href="/pricing" className="navitem">
                        <p>Pricing</p>
                    </a>
                    <a href="/login" className="navitem">
                        <p>Login</p>
                    </a>
                    <SecondaryButton text={'View live demo'} />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
