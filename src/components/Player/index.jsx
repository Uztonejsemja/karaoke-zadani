import React, { useRef, useState, useEffect } from 'react';
import './style.css';

const Player = ({ src }) => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef();

    useEffect(() => {
        if (playing) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [playing]);

    const handlePlay = () => {
        setPlaying(!playing);
    };

    const handleTime = (event) => {
        console.log(event.target.currentTime);
    };

    return(
        <>
        <audio className='play-controls' ref={audioRef} src={src} onTimeUpdate={handleTime}/>
        <button className='play-button' onClick={handlePlay}>{playing ? 'pause' : 'play'}</button>
        </>
    );
};

export default Player;