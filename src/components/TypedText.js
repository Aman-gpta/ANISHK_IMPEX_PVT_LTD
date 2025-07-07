import React, { useEffect, useRef } from 'react';

const TypedText = ({ text, typingDelay = 40, cursorClass = 'typed-cursor' }) => {
  const elementRef = useRef(null);
  const textParts = typeof text === 'string' ? [text] : text;

  useEffect(() => {
    let currentPartIndex = 0;
    const element = elementRef.current;

    if (!element) return;

    // Clear any previous content
    element.innerHTML = '';

    // Add cursor
    const cursor = document.createElement('span');
    cursor.className = cursorClass;
    cursor.textContent = '|';

    // Type each text part
    const typeNextPart = () => {
      if (currentPartIndex >= textParts.length) return;

      const currentPart = textParts[currentPartIndex];
      const textElement = document.createElement('span');
      element.appendChild(textElement);

      let i = 0;

      // Type the current part character by character
      const type = () => {
        if (i < currentPart.text.length) {
          textElement.innerHTML += currentPart.text.charAt(i);
          i++;
          setTimeout(type, typingDelay);
        } else {
          // Move to next part after typing current part
          currentPartIndex++;
          setTimeout(typeNextPart, typingDelay * 2);
        }
      };

      // Set text color if specified
      if (currentPart.color) {
        textElement.style.color = currentPart.color;
      }

      // Start typing current part
      type();
    };

    // Start typing
    typeNextPart();

    // Add blinking cursor
    element.appendChild(cursor);

    // Clean up function
    return () => {
      if (element) {
        element.innerHTML = '';
      }
    };
  }, [textParts, typingDelay, cursorClass]);

  return <span className="typed-text-container" ref={elementRef}></span>;
};

export default TypedText;
