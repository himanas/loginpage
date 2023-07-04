import React, { useEffect, useRef } from "react";
import "./animation_style.css";

const AnimatedText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const chars = text.split("");
    let index = 0;

    const intervalId = setInterval(() => {
      if (index === chars.length) {
        clearInterval(intervalId);
      } else {
        const char = chars[index];
        const span = document.createElement("span");
        span.textContent = char;
        span.classList.add("fade-in");
        textElement.appendChild(span);
        index++;
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [text]);

  return <div ref={textRef} className="text-container"></div>;
};

export default AnimatedText;
