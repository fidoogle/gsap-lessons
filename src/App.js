import React, { useEffect, useRef, useState } from 'react';
import { TweenMax, Power3 } from 'gsap';
import './App.css';
import Tile from './Tile'
import TileFlex from './tile-flex'

function App() {
 

  return (
    <div className="App">
      <Tile/>
      <br/><br/><br/>
      <TileFlex/>
    </div>
  );
}

export default App;
