import React from 'react';
import SmallText from '../SmallText';

function Character({ item: { icon, title, desc } }) {
    return (
        <div className="bg-Cream flex items-center justify-center flex-col  p-4 rounded-xl mt-3 text-center tracking-tight">
            <p>{icon}</p>
            <h2 className="font-semibold text-1.2rem">{title}</h2>
            <div className="text-[0.8rem]">
                <SmallText textApply={false} text={desc} leadingTight={true} />
            </div>
        </div>
    );
}

export default Character;
