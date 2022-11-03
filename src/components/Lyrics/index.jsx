import React, { useRef, useState, useEffect } from 'react';
import './style.css';

const Lyrics = ({ lines, currentLineIndex }) => {
    const currentLine = useRef();

    useEffect(() => {
        currentLine.current.scrollIntoView({
            block: 'start',
            inline: 'nearest',
            behavior: 'smooth',
          });
    },);

console.log(currentLineIndex);

    return(
        <div className='lyrics'>
            {lines.map((line, index) => {
                if (currentLineIndex === index) {
                    return (
                      <p key={index} className="current-line" ref={currentLine}>
                        {line.text}
                      </p>
                    );
                  }
                  return <p key={index}>{line.text}</p>;
                })}
        </div>
    );
};

export default Lyrics;