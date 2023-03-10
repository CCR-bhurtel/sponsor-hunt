import React from 'react';
import SectionTitle from '../SectionTitle';

function HowItWorks() {
    const list = [
        {
            normalText: 'Sign up in',
            textWithUnderline: '10 seconds',
            paragraph: "All you have to do is enter your email and click the subscribe button. That's it.",
        },
        {
            normalText: 'Receive lead',
            textWithUnderline: ' instantly',
            paragraph: 'Access our database of open  brand deals. Get real-time updates on new ones.',
        },
        {
            normalText: 'Start reaching out',
            textWithUnderline: ' today',
            paragraph: 'We remove the guess-work so you can start reaching out to brands who are ready to pay.',
        },
    ];
    return (
        <div className="section">
            <div className="sectiontitle text-Orch">
                <SectionTitle text={'How It Works'} />
                <div className="mechanisms mt-[-0.8rem] flex flex-col md:flex-row md:gap-2 items-start justify-between ">
                    {list.map((item, i) => (
                        <div key={i} className="item mt-4 min-w-[30%]">
                            <div className="itemTitle  font-semibold text-[1.2rem] lsm:text-[1.35rem] md:text-[0.85rem] lg:text-[1.2rem] inline">
                                {i + 1}. {item.normalText}{' '}
                                <div className="inline-flex flex-col items-center justify-center ">
                                    {item.textWithUnderline}
                                    <div className="gradientBar mt-[-3px]"></div>
                                </div>
                            </div>
                            <p className="text-Smoke font-medium leading-tight ml-5 lsm:text-[1.2rem] md:text-[0.9rem]  md:ml-1 md:text-center md:max-w-[220px] ">
                                {item.paragraph}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
