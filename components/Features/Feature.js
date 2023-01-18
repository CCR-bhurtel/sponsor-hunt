import React from 'react';
import SmallMix from '../MixText.js/SmallMix';

function Feature({ feature: { text1, gradientText, text2, img } }) {
    return (
        <div className="feature w-full flex align-center justify-center mt-2 gap-2">
            <div className="textPart bg-Cultured rounded-xl p-4 w-[50%] leading-tight text-[0.8rem] font-semibold">
                <SmallMix text1={text1} gradientText={gradientText} text2={text2} />
            </div>
            <div className="imagePart bg-Cultured rounded-xl w-[50%] flex items-center">
                <img className="w-full" src={img} alt={text1} />
            </div>
        </div>
    );
}

export default Feature;
