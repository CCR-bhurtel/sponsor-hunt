import React from 'react';

function BixMix({ text1, gradientText }) {
    return (
        <div className="font-bold text-[1.7rem] md:text-[2.5rem] leading-tight text-Orch">
            {text1}
            <br /> <span className="gradient-text">{gradientText}</span>
        </div>
    );
}

export default BixMix;
