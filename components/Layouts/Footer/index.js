import React from 'react';
import SmallText from '../../SmallText';

function Footer() {
    return (
        <div className="mt-[4rem] mb-[1rem] md:flex flex-row justify-between md:px-4">
            <p className="text-Orch font-semibold text-[1rem] lsm:text-[1.2rem] md:text-[1.4rem]">Handcrafted with 🖤 in Canada</p>
            <div className="mt-1 md:inline">
                <p className="text-Smoke font-medium text-[1rem] md:inline mr-4 lsm:text-[1.1rem] md:text-[1.3rem]">Terms of service</p>
                <p className="text-Smoke font-medium text-[1rem] md:inline mr-4 lsm:text-[1.1rem] md:text-[1.3rem]">Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;
