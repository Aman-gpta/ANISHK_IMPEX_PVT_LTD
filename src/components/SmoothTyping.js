import React, { useEffect, useState } from 'react';

const SmoothTyping = () => {
    const [firstLineVisible, setFirstLineVisible] = useState(false);
    const [secondLineVisible, setSecondLineVisible] = useState(false);

    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setFirstLineVisible(true);
        }, 500); // Delay for first line

        const secondTimer = setTimeout(() => {
            setSecondLineVisible(true);
        }, 1200); // Delay for second line

        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
        };
    }, []);

    return (
        <div className="smooth-typing-container">
            <h1 className={`typewriter-line ${firstLineVisible ? 'fade-in-up' : ''}`}>
                <span className="white-text">GLOBAL</span> <span className="copper-text">METALS</span>
            </h1>
            <h1 className={`typewriter-line second-line ${secondLineVisible ? 'fade-in-up' : ''}`}>
                <span className="copper-text">LOCAL</span> <span className="white-text">TRUST</span>
            </h1>
        </div>
    );
};

export default SmoothTyping;
