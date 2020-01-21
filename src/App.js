import React, {useContext, useEffect, useRef} from 'react';
import './App.scss';
import Tiles from './tiles'
import { StoreContext } from './stores/store'


function App() {
  let oneOverlay = useRef(null)
  const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext); //fancy destructuring

  useEffect(() => {
    setDataApp({...dataApp, oneOverlay})
}, [dataApp.oneOverlay]);

  return (
    <div className="App">
      <div id="overlay" ref={el => { oneOverlay = el }}></div>
      <h2>Uses Flexbox, Material UI, Greensock, Media Queries for mobile and desktop views.</h2>
      <Tiles />
    </div>
  );
}

export default App;
