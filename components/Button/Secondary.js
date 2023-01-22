import React from 'react';

function Secondary({ text, playHandler }) {
    return (
        <button
            onClick={playHandler}
            className="bg-transparent border-2 border-black btn px-[1rem] p-[1rem] text-[1.2rem] rounded-[10px] font-bold tracking-wide btn"
        >
            {text}
        </button>
    );
}

export default Secondary;
