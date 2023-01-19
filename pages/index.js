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
import ContentWrapper from '../components/Layouts/ContentWrapper';
import Hero from '../components/Hero';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Sponsor Hunt</title>
                <meta name="description" content="sponsor hunt" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentWrapper>
                <div className="mt-4 md:mt-[4rem]">
                    <Hero />
                    <section className="misc mt-4">
                        <div className="font-bold text-[1.3rem] md:text-[1.4rem] lg:text-[1.6rem] leading-tight">
                            Securing paid collabs can take <br /> hours...or days. <br />
                            <span className="gradient-text"> Land more deals, faster.</span>
                        </div>
                        <div className="mt-2 max-w-[490px] md:text-[1.2rem]">
                            <SmallText
                                textApply={false}
                                text={
                                    'We track brand deals in real-time, and send you the data to convert hot new leads into paying clients.'
                                }
                            />
                        </div>
                    </section>
                    <section className="mt-[2rem]">
                        <HowItWorks />
                    </section>
                    <section className="mt-4">
                        <Features />
                    </section>
                </div>
            </ContentWrapper>

            <section className="mt-4 bg-Cultured rounded-lg ">
                <Characters />
            </section>
            <ContentWrapper>
                <section className="mt-4">
                    <Plans />
                </section>
                <section className="mt-4">
                    <AwareText />
                </section>
            </ContentWrapper>
        </div>
    );
}
