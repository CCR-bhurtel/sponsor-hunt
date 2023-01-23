import React from 'react';

function SectionTitle({ text }) {
    return (
        <p
            className="font-bold text-[1.3rem] lsm:text-[1.7rem] leading-tight md:text-[1.9rem] lg:text-[2.3rem] max-w-[37.5rem]"
            style={{ lineHeight: 1.3 }}
        >
            {text}
        </p>
    );
}

export default SectionTitle;
