import React from 'react';
// primary button
function index({ text, link }) {
    return (
        <button className="bg-Orch btn px-[1rem] py-[0.7rem] text-[1rem] rounded-[10px] font-semibold tracking-wide btn">
            <a className="text-white" href={link}>
                {text}
            </a>
        </button>
    );
}

export default index;
