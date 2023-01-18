import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Sponsor Hunt</title>
                <meta name="description" content="sponsor hunt" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="overflow-hidden"></div>
        </div>
    );
}
