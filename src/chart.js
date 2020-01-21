import React, { useContext, useEffect, useRef } from 'react';
import { StoreContext } from './stores/store'

function Component() {
    let oneChart = useRef(null)
    const { ['appInfo']: [dataApp, setDataApp] } = useContext(StoreContext); //global

    useEffect(() => {
        setDataApp({...dataApp, oneChart})
    }, [oneChart]);

    return (
        //<div id="chart" ref={el => { oneChart = el }} >
        <>
            <h2>This will be a chart</h2>
        </>
    );
}

export default Component;