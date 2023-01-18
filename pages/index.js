import Head from 'next/head';
import BixMix from '../components/MixText.js/BigMix';
import SmallText from '../components/SmallText';
import PrimaryButton from '../components/Button';
import SecondaryButton from '../components/Button/Secondary';
import VideoContainer from '../components/VideoContainer';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Characters from '../components/Characters';
import Plans from '../components/Plans';
import AwareText from '../components/AwareText.js';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Sponsor Hunt</title>
                <meta name="description" content="sponsor hunt" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mt-4">
                <div className="hero">
                    <div className="hero--text text-center">
                        <div className="mix ">
                            <BixMix text1={'Find live brand deals, land'} gradientText={'more paid collabs'} />
                        </div>
                        <div className="p1 leading-tight mt-3">
                            <SmallText text={'Track 1000+'} inline={true} />
                            <SmallText
                                text={'companies that are paying creators for brand deals right now.'}
                                underline={true}
                                inline={true}
                            />
                        </div>
                        <div className="p2 mt-2">
                            <SmallText text={'In your inbox. Updated every day.'} />
                        </div>
                        <div className="buttons flex items-center mt-4 justify-center flex-col">
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
                <section className="misc mt-4">
                    <div className="font-bold text-[1.3rem] leading-tight">
                        Securing paid collabs can take hours...or days. <br /> So
                        <span className="gradient-text"> Land more deals, faster.</span>
                    </div>
                    <div className="mt-2">
                        <SmallText
                            textApply={false}
                            text={
                                'We track brand deals in real-time, and send you the data to convert hot new leads into paying clients.'
                            }
                        />
                    </div>
                </section>
                <section className="mt-4">
                    <HowItWorks />
                </section>
                <section className="mt-4">
                    <Features />
                </section>
                <section className="mt-4 bg-Cultured rounded-lg ">
                    <Characters />
                </section>
                <section className="mt-4">
                    <Plans />
                </section>
                <section className="mt-4">
                    <AwareText />
                </section>
            </div>
        </div>
    );
}
