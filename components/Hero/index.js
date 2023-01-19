import React from 'react';
import BixMix from '../MixText.js/BigMix';
import SmallText from '../SmallText';
import PrimaryButton from '../Button';
import SecondaryButton from '../Button/Secondary';
import VideoContainer from '../VideoContainer';

function Hero() {
    return (
        <div className="hero">
            <div className="hero--text text-center flex items-center justify-center flex-col">
                <div className="mix ">
                    <BixMix text1={'Find live brand deals, land'} gradientText={'more paid collabs'} />
                </div>
                <div className="max-w-[30rem] text-center ">
                    <div className="p1 leading-tight mt-3 md:mt-6 ">
                        <SmallText text={'Track 1000+'} inline={true} />
                        <SmallText
                            text={'companies that are paying creators for brand deals right now.'}
                            underline={true}
                            inline={true}
                        />
                    </div>
                    <div className="p2 mt-2 md:mt-4">
                        <SmallText text={'In your inbox. Updated every day.'} />
                    </div>
                </div>

                <div className="buttons flex items-center mt-4 justify-center flex-col md:mb-6 md:mt-6">
                    <div className="primary">
                        <PrimaryButton text="Get brand deals" />
                    </div>
                    <div className="secondary mt-3">
                        <SecondaryButton text="View live demo" />
                    </div>
                </div>
            </div>
            <div className="video mt-4">
                <VideoContainer />
            </div>
        </div>
    );
}

export default Hero;
