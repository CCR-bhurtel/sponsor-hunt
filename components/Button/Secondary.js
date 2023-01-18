import React from 'react';

function Secondary({ text, playHandler }) {
    return (
        <button onClick={playHandler} className="bg-transparent border border-2 border-Iron ">
            {text}
        </button>
    );
}

export default Secondary;
