import React from 'react';
import SectionTitle from '../SectionTitle';
import SmallText from '../SmallText';

function AwareText() {
    return (
        <div className="mt-[2rem] max-w-[20rem] md:max-w-[30rem]">
            <SectionTitle text="Stop leaving money on the table." />
            <div className="tracking-tight leading-tight lsm:text-[1.2rem] md:text-[1.4rem]">
                <SmallText
                    textApply={false}
                    text={'Get early access to brand deals and start landing more sponsors, faster. '}
                />
            </div>
        </div>
    );
}

export default AwareText;
