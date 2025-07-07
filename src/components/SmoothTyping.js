import React, { useEffect, useRef, useState } from 'react';

const SmoothTyping = () => {
    const textRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 800); // Delay before fade-in
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`smooth-typing-container${show ? ' fade-in-text' : ''}`} ref={textRef}>
            <h1>
                <span className="white-text">GLOBAL</span> <span className="copper-text">METALS</span>
            </h1>
            <h1>
                <span className="copper-text">LOCAL</span> <span className="white-text">TRUST</span>
            </h1>
        </div>
    );
};

export default SmoothTyping;
