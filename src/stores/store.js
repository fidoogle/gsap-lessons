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
        oneOverlay: null,
        selectedAccount: accountNumbers[0] //can be set to first accountNumber after they load
    }

    // Global Functions
    const showOverlay = (oneOverlay) => {
        oneOverlay.setAttribute("style", "height: 100%;")
        gsap.to(oneOverlay, {duration: 1, autoAlpha: 1, delay: 0})
    };
    const hideOverlay = (oneOverlay) => {
        oneOverlay.setAttribute("style", "height: 0")
        //gsap.to(oneOverlay, {duration: .5, autoAlpha: 0, height: 0})
    };
    const globalFunctions = {
        showOverlay,
        hideOverlay
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
