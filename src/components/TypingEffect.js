import React, { useEffect } from 'react';

const TypingEffect = () => {
    useEffect(() => {
        const timer1 = setTimeout(() => {
            const line1 = document.querySelector('.line1');
            if (line1) line1.classList.add('typed');
        }, 800);

        const timer2 = setTimeout(() => {
            const line2 = document.querySelector('.line2');
            if (line2) line2.classList.add('typed');
        }, 1800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <h1 className="typing-text">
            <span className="line1">
                <span className="white-text">GLOBAL</span> <span className="copper-text">METALS</span>
            </span>
            <br />
            <span className="line2">
                <span className="copper-text">LOCAL</span> <span className="white-text">TRUST</span>
            </span>
        </h1>
    );
};

export default TypingEffect;
