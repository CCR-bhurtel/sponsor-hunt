import React from 'react';

function SmallText({ text, underline = false, textApply = true, inline = false, leadingTight = false }) {
    return (
        <div
            style={{ lineHeight: leadingTight ? 1.2 : 'unset' }}
            className={`font-medium ${
                textApply && 'text-[0.9rem] md:text-[1.1rem] lg:text-[1.4rem] lg:tracking-wide'
            } text-Smoke ${underline && 'underline'} ${inline && 'inline'}`}
        >
            {text}{' '}
        </div>
    );
}

export default SmallText;
