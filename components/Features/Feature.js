import React from 'react';
import SmallMix from '../MixText.js/SmallMix';

function Feature({ feature: { text1, gradientText, text2, img } }) {
    return (
        <div className="feature w-full flex align-center justify-center mt-2 gap-2">
            <div className="textPart bg-Cultured rounded-xl px-2 py-4 w-[50%] flex items-center justify-center leading-tight min-h-[168px] md:min-h-[250px] text-[0.8rem] usm:text-[0.9rem] md:text-[1.4rem] lg:text-[1.8rem] font-semibold flex items-center">
                <div className="max-w-[80%]">
                    <SmallMix text1={text1} gradientText={gradientText} text2={text2} />
                </div>
            </div>
            <div className="imagePart bg-Cultured rounded-xl w-[50%] flex items-center">
                <img className="w-full" src={img} alt={text1} />
            </div>
        </div>
    );
}

export default Feature;
