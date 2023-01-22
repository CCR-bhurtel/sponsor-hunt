import React from 'react';

function NavItem({ text, link }) {
    return (
        <a href={link} className="navitem text-[1.2rem] md:text-[1.3rem]">
            <p>{text}</p>
        </a>
    );
}

export default NavItem;
