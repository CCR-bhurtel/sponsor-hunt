import React from 'react';

function Popup({ popupCloseHandler, children }) {
    return (
        <div className="relative">
            <div className="overlay inset-0 bg-Orch opacity-[0.5]"></div>
            {children}
        </div>
    );
}

export default Popup;
