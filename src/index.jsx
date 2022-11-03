import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Lyrics from './components/Lyrics';
import Player from './components/Player';
import './style.css';
import lines from './lyrics-lines';

const App = () => {
  const [currentLine, setCurrentLine] = useState(1);

  return (
    <div className="container">
      <h1>Fools Garden - Lemon Tree</h1>
      <Player src={'fools-garden-lemon-tree.mp3'}/>
      <Lyrics lines={lines} currentLineIndex={currentLine}/>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
