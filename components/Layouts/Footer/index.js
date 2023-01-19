import React from 'react';
import SmallText from '../../SmallText';

function Footer() {
    return (
        <div className="mt-[4rem] mb-[1rem] md:flex flex-row justify-between md:px-4">
            <p className="text-Orch font-semibold text-[1rem] md:text-[1.2rem]">Handcrafted with 🖤 in Canada</p>
            <div className="mt-1 md:inline">
                <p className="text-Smoke font-medium text-[1rem] md:inline mr-4 md:text-[1.1rem]">Terms of service</p>
                <p className="text-Smoke font-medium text-[1rem] md:inline mr-4 md:text-[1.1rem]">Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;
