import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import '../styles/globals.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function MyApp({ Component, pageProps }) {
    return (
        <div className="font-Inter">
            <Elements stripe={stripePromise}>
                <Navbar />
                <div className="content  flex items-center justify-center ">
                    <Component {...pageProps} />
                </div>

                <div className="ml-[1rem]">
                    <Footer />
                </div>
            </Elements>
        </div>
    );
}

export default MyApp;
