import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
// primary button
function index({ text, link }) {
    const [isRotate, setIsRotate] = useState(false);
    const [isConfetti, setIsConfetti] = useState(false);
    const [translate, setTranslate] = useState(0);
    const changeRotateHandler = () => {
        setIsRotate(true);
        // setTimeout(() => {
        //     // sendModalItem(id, title, price);
        //     // props.onOpen();
        // }, 300);

        setTimeout(() => {
            setIsRotate(false);
        }, 700);

        setIsConfetti(true);
        setTimeout(() => {
            setIsConfetti(false);
        }, 100);
    };
    const config = {
        angle: 280,
        spread: 300,
        startVelocity: 50,
        elementCount: 50,
        dragFriction: 0.4,
        duration: 1000,
        stagger: 3,
        width: '10px',
        height: '10px',
        perspective: '600px',
        colors: ['#00D4FE', '#7B74FF', '#241918', '#ff718d', '#fdff6a'],
    };
    return (
        <div className="flex justify-center">
            <Confetti
                style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top: '0',
                    alignItems: 'flex-end',
                }}
                active={isConfetti}
                config={config}
            />
            <button
                onClick={changeRotateHandler}
                className={`bg-Orch btn px-[1rem] py-[0.7rem] text-[1rem] rounded-[10px] font-semibold tracking-wide btn ${
                    translate && 'translate-y-2'
                }  ${isRotate && 'animate-[rotate_0.6s_ease-in-out]'}`}
            >
                <a className={`text-white`} href={link}>
                    {text}
                </a>
            </button>
        </div>
    );
}

export default index;
