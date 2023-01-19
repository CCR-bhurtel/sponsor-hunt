import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="font-Inter">
            <Navbar />
            <div className="content  flex items-center justify-center ">
                <Component {...pageProps} />
            </div>

            <div className="ml-[1rem]">
                <Footer />
            </div>
        </div>
    );
}

export default MyApp;
