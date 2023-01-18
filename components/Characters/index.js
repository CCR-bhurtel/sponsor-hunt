import React from 'react';
import SectionTitle from '../SectionTitle';
import SmallText from '../SmallText';
import Character from './Character';

function Characters() {
    const characters = [
        {
            icon: '✋',
            title: 'Handpicked leads',
            desc: 'Every single data point is collected and verified by creators just like you.',
        },
        {
            icon: '🚨',
            title: 'Live signals on brand deals',
            desc: 'We update our data every 30 mins to  send you real-time info on new deals.',
        },
        {
            icon: '🧬',
            title: '100s of hours on reasearch',
            desc: 'We research for high quality brand deal info and new sources every day',
        },
        {
            icon: '🤖',
            title: '1000s of dollars on tech',
            desc: 'We use the top tech/tools to populate our database with new input per day.',
        },
        {
            icon: '✅',
            title: 'Verified ad deals only',
            desc: ' Manually verified company information + 100% legit brand deals.',
        },
        {
            icon: '🔥',
            title: 'Access to secret sauce',
            desc: 'We track deals instantly. We’re so fast you won’t find info like this anywhere.',
        },
    ];
    return (
        <div className="p-3 rounded-md  flex flex-col   bg-Cultured">
            <div className="sectionText mt-4">
                <SectionTitle text={'Save time on outreach and focus on creating'} />
                <div className="mt-2">
                    <SmallText
                        text={
                            'Find brand deals and land clients on easy mode, so you can channel your energy on being a creator.'
                        }
                    />
                </div>
            </div>
            <div className="characters flex flex-col items-center justify-center mt-2">
                {characters.map((character, i) => (
                    <Character key={i} item={character} />
                ))}
            </div>
        </div>
    );
}

export default Characters;
