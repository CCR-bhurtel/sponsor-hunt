import React from 'react';

function SectionTitle({ text }) {
    return (
        <p
            className="font-bold text-[1.3rem] lsm:text-[1.7rem] md:text-[1.9rem] max-w-[27.5rem]"
            style={{ lineHeight: 1.3 }}
        >
            {text}
        </p>
    );
}

export default SectionTitle;
