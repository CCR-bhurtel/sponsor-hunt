import React from 'react';

function NavItem({ text, link }) {
    return (
        <a href={link} className="navitem md:text-[1rem]">
            <p>{text}</p>
        </a>
    );
}

export default NavItem;
