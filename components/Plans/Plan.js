import React from 'react';
import SectionTitle from '../SectionTitle';
import tick from '../../assets/Icons/tick.png';
import cross from '../../assets/Icons/cross.png';
import PrimaryButton from '../Button';

function Plan({ details: { plan_id, name, desc, features, price } }) {
    return (
        <div
            className={`${
                name === 'Beginner' ? 'bg-Lotion border-[1px]' : 'gradient-bg-card'
            }  border-Iron  rounded-xl p-4`}
        >
            <SectionTitle text={name} />
            <p className="font-medium text-Orch text-[1rem] leading-tight tracking-tight mt-2 max-w-[15rem]">{desc}</p>
            <p className="price font-medium my-4">
                $<span className="font-semibold text-[1.7rem]">{price}</span>/month
            </p>
            <div className="mt-6 min-h-[9rem]">
                {features.map((feature) => {
                    return (
                        <div className="flex flex-row items-center justify-start mb-4">
                            <img className="w-[17px]" src={feature.available ? tick.src : cross.src} alt="" />
                            <p className="font-medium ml-2">{feature.key}</p>
                        </div>
                    );
                })}
            </div>
            <p className="my-6">
                <PrimaryButton text={'Get brand deals'} />
            </p>
        </div>
    );
}

export default Plan;
