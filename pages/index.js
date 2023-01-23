import Head from 'next/head';
import { useEffect } from 'react';
import SmallText from '../components/SmallText';

import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Characters from '../components/Characters';
import Plans from '../components/Plans';
import AwareText from '../components/AwareText.js';
import ContentWrapper from '../components/Layouts/ContentWrapper';
import Hero from '../components/Hero';
import SectionWrapper from '../components/Layouts/SectionWrapper';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Sponsor Hunt</title>
                <meta name="description" content="sponsor hunt" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContentWrapper>
                <div className="mt-[2rem] md:mt-[4rem]">
                    <Hero />
                    <SectionWrapper>
                        <div className="font-bold text-[1.3rem] lsm:text-[1.7rem] md:text-[1.9rem] lg:max-w-[30rem] leading-tight">
                            Securing paid collabs can take hours...or days. <br />
                            <span className="gradient-text"> Land more deals, faster.</span>
                        </div>
                        <div className="mt-2 max-w-[490px] leading-tight lsm:text-[1.3rem] md:text-[1.2rem]">
                            <SmallText
                                textApply={false}
                                text={
                                    'We track brand deals in real-time, and send you the data to convert hot new leads into paying clients.'
                                }
                            />
                        </div>
                    </SectionWrapper>
                    <SectionWrapper>
                        <HowItWorks />
                    </SectionWrapper>
                    <SectionWrapper>
                        <Features />
                    </SectionWrapper>
                </div>
            </ContentWrapper>

            <SectionWrapper>
                <div className=" bg-Cultured rounded-lg ">
                    <Characters />
                </div>
            </SectionWrapper>
            <ContentWrapper>
                <SectionWrapper>
                    <Plans />
                </SectionWrapper>
                <SectionWrapper>
                    <AwareText />
                </SectionWrapper>
            </ContentWrapper>
        </div>
    );
}
