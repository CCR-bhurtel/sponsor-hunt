import React from 'react';

function Secondary({ text, playHandler }) {
    return (
        <button
            onClick={playHandler}
            className="bg-transparent border border-2 border-black btn px-[1rem] py-[0.7rem] text-[0.8rem] rounded-[10px] font-bold tracking-wide btn"
        >
            {text}
        </button>
    );
}

export default Secondary;
