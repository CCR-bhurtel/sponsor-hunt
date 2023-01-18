import React from 'react';

function SmallMix({ text1, gradientText, text2 = '', fontSize, fontWeight = 'bold' }) {
    console.log(className);
    return (
        <div className={className}>
            {text1} <span className="gradient-text">{gradientText}</span>
            {text2}
        </div>
    );
}

export default SmallMix;
