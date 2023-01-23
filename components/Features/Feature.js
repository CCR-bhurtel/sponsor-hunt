import React from 'react';
import SmallMix from '../MixText.js/SmallMix';

function Feature({ feature: { text1, gradientText, text2, img, index } }) {
    return (
        <div className="feature w-full flex align-center justify-center mt-2 gap-2 lg:gap-4 min-h-[200px]">
            <div className="textPart bg-Cultured rounded-xl  md:px-2 py-4 w-[50%] flex items-center justify-center leading-tight min-h-[168px] md:min-h-[250px] text-[0.8rem] lsm:text-[1rem] md:text-[1.4rem] lg:text-[1.8rem] font-semibold">
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
