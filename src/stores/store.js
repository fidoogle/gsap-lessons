//https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm

import React from 'react'
import { gsap } from 'gsap/all'


export const StoreContext = React.createContext(null)

export default ({ children }) => {
    //Initial data can be gathered from asynch request
    const accountNumbers = ['11111', '22222', '33333']
    const userProfile = {
        name: 'Pedro Smith',
        email: 'pedrosmith@gmail.com'
    }
    const appState = {
        oneChart: null,
        oneOverlay: null,
        selectedAccount: accountNumbers[0] //can be set to first accountNumber after they load
    }

    // Global Functions
    const showOverlay = (oneOverlay, show) => {
        if (show) {
            oneOverlay.setAttribute("style", "height: 100%;")
            gsap.to(oneOverlay, {duration: 1, autoAlpha: 1, delay: 0})
        } else {
            oneOverlay.setAttribute("style", "height: 0")
        }
    };
    const showChart = (oneChart, show) => {
        if (show) {
            gsap.set(oneChart, {position: 'absolute', top: 400, 'z-index': 300, display: 'flex', width: '100%'})
        } else {
            gsap.set(oneChart, {position: 'static', display: 'none'})
        }
    };
    const globalFunctions = {
        showOverlay,
        showChart
    }

    const [app, setApp] = React.useState(appState)
    const [user, setUser] = React.useState(userProfile)
    const [accounts, setAccounts] = React.useState(accountNumbers)
    const [appFunctions, setAppFunctions] = React.useState(globalFunctions)

    const store = {
        appInfo: [app, setApp],
        userInfo: [user, setUser],
        accountInfo: [accounts, setAccounts],
        appFunctions: [appFunctions, setAppFunctions],
    }

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
