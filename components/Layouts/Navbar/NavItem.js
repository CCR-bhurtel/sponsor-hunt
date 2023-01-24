import React from 'react';

function NavItem({ text, link, onClick }) {
    return (
        <a
            onClick={() => {
                onClick ? onClick() : () => {};
            }}
            href={link}
            className="navitem text-[1.2rem] md:text-[1.3rem] cursor-pointer"
        >
            <p>{text}</p>
        </a>
    );
}

export default NavItem;
