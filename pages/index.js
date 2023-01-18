import Head from 'next/head';
import BixMix from '../components/MixText.js/BigMix';
import SmallText from '../components/SmallText';
import PrimaryButton from '../components/Button';
import SecondaryButton from '../components/Button/Secondary';
import VideoContainer from '../components/VideoContainer';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Sponsor Hunt</title>
                <meta name="description" content="sponsor hunt" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-hidden mt-4">
                <div className="hero">
                    <div className="hero--text">
                        <BixMix text1={'Find live brand deals, land'} gradientText={'more paid collabs'} />
                        <div className="p1 leading-tight mt-3">
                            <SmallText text={'Track 1000+'} />
                            <SmallText
                                text={'companies that are paying creators for brand deals right now.'}
                                underline={true}
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
                    <section className="misc mt-4">
                        <BixMix
                            text1={'Securing paid collabs can take hours...or days. &#10;  So'}
                            gradientText={'we find deals for you.'}
                        />
                        <SmallText text={"We track brand deals in real-time, and send you the data to convert hot new leads into paying clients."}/>
                    </section>
                </div>
            </div>
        </div>
    );
}
