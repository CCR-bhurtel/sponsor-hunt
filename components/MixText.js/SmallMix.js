import React from 'react';

function SmallMix({ text1, gradientText, text2 = '', fontSize, fontWeight = 'bold', underline = true }) {
    return (
        <div className='text-Orch'>
            {text1} <div className={`gradient-text inline ${underline && 'underline'}`}>{gradientText}</div>
            {text2}
        </div>
    );
}

export default SmallMix;
