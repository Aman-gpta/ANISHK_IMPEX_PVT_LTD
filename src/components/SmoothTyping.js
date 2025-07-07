import React, { useEffect, useRef } from 'react';

const SmoothTyping = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement) return;

        // Clear any existing content
        textElement.innerHTML = '';

        // Create the text content with shorter text for mobile compatibility
        const texts = [
            [
                { text: 'GLOBAL', className: 'white-text' },
                { text: ' ', className: '' },
                { text: 'METALS', className: 'copper-text' }
            ],
            [
                { text: 'LOCAL', className: 'copper-text' },
                { text: ' ', className: '' },
                { text: 'TRUST', className: 'white-text' }
            ]
        ];

        // Create containers
        const line1 = document.createElement('h1');
        line1.className = 'typewriter-line';

        const line2 = document.createElement('h1');
        line2.className = 'typewriter-line second-line';

        // Add cursor to line 1
        const cursor1 = document.createElement('span');
        cursor1.className = 'cursor';
        cursor1.innerHTML = '|';

        // Add cursor to line 2
        const cursor2 = document.createElement('span');
        cursor2.className = 'cursor';
        cursor2.innerHTML = '|';
        cursor2.style.visibility = 'hidden'; // Initially hidden

        textElement.appendChild(line1);
        line1.appendChild(cursor1);
        textElement.appendChild(line2);
        line2.appendChild(cursor2);

        // Type the first line
        const typeLine = (lineElement, textArr, cursor, onComplete, charDelay = 40) => {
            let charIndex = 0;
            let partIndex = 0;
            let currentSpan = null;

            const type = () => {
                // Create new span for a new part
                if (!currentSpan) {
                    currentSpan = document.createElement('span');
                    if (textArr[partIndex].className) {
                        currentSpan.className = textArr[partIndex].className;
                    }
                    lineElement.insertBefore(currentSpan, cursor);
                }

                // Add character
                const part = textArr[partIndex];
                if (charIndex < part.text.length) {
                    currentSpan.textContent += part.text[charIndex];
                    charIndex++;
                    setTimeout(type, charDelay);
                }
                // Move to next part
                else {
                    charIndex = 0;
                    partIndex++;
                    currentSpan = null;

                    if (partIndex < textArr.length) {
                        setTimeout(type, charDelay);
                    } else {
                        // Done with this line
                        if (onComplete) onComplete();
                    }
                }
            };

            // Start typing
            type();
        };

        // Type first line, then second line
        setTimeout(() => {
            typeLine(line1, texts[0], cursor1, () => {
                // When first line is done, wait a bit then start second line
                setTimeout(() => {
                    cursor1.style.visibility = 'hidden'; // Hide first cursor
                    cursor2.style.visibility = 'visible'; // Show second cursor
                    typeLine(line2, texts[1], cursor2, () => {
                        // When typing is all done, hide cursor and append 5 dots
                        cursor2.style.visibility = 'hidden';

                        const dotsContainer = document.createElement('span');
                        dotsContainer.className = 'dots-container white-text';
                        line2.appendChild(dotsContainer);

                        // Add 5 dots with staggered timing
                        setTimeout(() => {
                            const dot1 = document.createElement('span');
                            dot1.className = 'dot';
                            dot1.textContent = '.';
                            dotsContainer.appendChild(dot1);
                        }, 200);

                        setTimeout(() => {
                            const dot2 = document.createElement('span');
                            dot2.className = 'dot';
                            dot2.textContent = '.';
                            dotsContainer.appendChild(dot2);
                        }, 400);

                        setTimeout(() => {
                            const dot3 = document.createElement('span');
                            dot3.className = 'dot';
                            dot3.textContent = '.';
                            dotsContainer.appendChild(dot3);
                        }, 600);

                        setTimeout(() => {
                            const dot4 = document.createElement('span');
                            dot4.className = 'dot';
                            dot4.textContent = '.';
                            dotsContainer.appendChild(dot4);
                        }, 800);

                        setTimeout(() => {
                            const dot5 = document.createElement('span');
                            dot5.className = 'dot';
                            dot5.textContent = '.';
                            dotsContainer.appendChild(dot5);
                        }, 1000);

                    }, 40);
                }, 200);
            }, 40);
        }, 150);

        return () => {
            if (textElement) {
                textElement.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="smooth-typing-container" ref={textRef}></div>
    );
};

export default SmoothTyping;
