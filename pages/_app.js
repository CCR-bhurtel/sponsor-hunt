import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="font-Inter">
            <Navbar />
            <div className="content  flex items-center justify-center text-center">
                <div className="content-wrapper max-w-[280px] md:max-w-[650px] lg:max-w-[1000px]">
                    <Component {...pageProps} />
                </div>
            </div>
        </div>
    );
}

export default MyApp;
