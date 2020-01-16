import React, { useEffect, useRef, useState } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './App.css';
import Tile from './Tile'
import TileFlex from './tile-flex'

function App() {
 

  return (
    <div className="App">
      <h2>These are all Material UI based.</h2>
      <Tile/>
      <br/><br/><br/>
      <h2>These are all Flexbox based with sprinkles of Material UI</h2>
      <TileFlex/>
    </div>
  );
}

export default App;
