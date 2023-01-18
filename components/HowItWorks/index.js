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
                <SectionTitle text={'How it Works'} />
                <div className="mechanisms mt-[-0.8rem]">
                    {list.map((item, i) => (
                        <div key={i} className="item mt-4">
                            <div className="itemTitle font-semibold text-[1.2rem] inline">
                                {i + 1}. {item.normalText}{' '}
                                <div className="inline-flex flex-col items-center justify-center">
                                    {item.textWithUnderline}
                                    <div className="gradientBar mt-[-3px]"></div>
                                </div>
                            </div>
                            <p className="text-Smoke font-medium leading-tight ml-5">{item.paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
