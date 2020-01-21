import React, {useContext, useEffect, useRef} from 'react';
import './App.scss';
import Chart from './chart'
import Tiles from './tiles'
import { StoreContext } from './stores/store'


function App() {
  let oneChart = useRef(null)
  let oneOverlay = useRef(null)
  const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext); //global

  useEffect(() => {
    setDataApp({...dataApp, oneChart, oneOverlay})
}, [oneChart, oneOverlay]);

  return (
    <div className="App">
      <div id="overlay" ref={el => { oneOverlay = el }}></div>
      <h2>Uses Flexbox, Material UI, Greensock, Media Queries for mobile and desktop views.</h2>
      <Tiles />
      <div className="flex-center" ref={el => { oneChart = el }}>
        <Chart/>
      </div>
    </div>
  );
}

export default App;
