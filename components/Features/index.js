import React from 'react';
import chart from '../../assets/Images/chart_stroke.png';
import measure from '../../assets/Images/measure.png';
import rocket from '../../assets/Images/rocket.png';
import venn from '../../assets/Images/venn_diagram.png';
import cycle from '../../assets/Images/cycle.png';
import Feature from './Feature';
import SectionTitle from '../SectionTitle';

function Features() {
    const items = [
        {
            text1: 'Find companies that are',
            gradientText: 'paying content creators like you for advertising right now ',
            text2: 'with more budget to spend.',
            img: chart.src,
        },
        {
            text1: '',
            gradientText: 'Handpicked brands for content creators',
            text2: ' of all sizes that are easy to reach out to and build relationships with. ',
            img: measure.src,
        },
        {
            text1: 'These companies have a',
            gradientText: ' budget to spend in your niche ',
            text2: ' and are investing in paid advertising. This is where you fit in. ',
            img: venn.src,
        },
        {
            text1: 'All have',
            gradientText: ' verified brand deals and decision maker contact info. ',
            text2: 'Unlock endless paid brand collab potential.',
            img: cycle.src,
        },
        {
            text1: '💸',
            gradientText: ' Monetize your content creator business ',
            text2: ' and take it to the next level.',
            img: rocket.src,
        },
    ];
    return (
        <div className="mt-[3rem] mb-[1rem]">
            <div className="max-w-[340px]">
                <SectionTitle text={'Super charge your paid brand deal outreach'} />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                    {items.map((item, i) => (
                        <Feature feature={item} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
