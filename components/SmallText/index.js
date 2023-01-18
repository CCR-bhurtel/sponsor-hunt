import React from 'react';

function SmallText({ text, underline = false }) {
    return <span className={`font-medium text-[0.9rem] text-Smoke ${underline && 'underline'}`}>{text} </span>;
}

export default SmallText;
