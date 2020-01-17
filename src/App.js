import React, {useContext, useEffect, useRef} from 'react';
import './App.scss';
import TileFlex from './tile-flex'
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
      <h2>This uses Flexbox for the Layout and the Card with sprinkles of Material UI</h2>
      <TileFlex />
    </div>
  );
}

export default App;
