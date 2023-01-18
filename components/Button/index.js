import React from 'react';
// primary button
function index({ text, link }) {
    return (
        <button className="bg-Orch">
            <a className="text-white" href={link}>
                {text}
            </a>
        </button>
    );
}

export default index;
