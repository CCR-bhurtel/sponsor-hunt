import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <div className="font-Inter">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
