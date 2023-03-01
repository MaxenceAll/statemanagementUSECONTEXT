import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ( {children} ) => {

    const [userName, setUserName] = useState("Toto");

    const value = {
        userName,
        setUserName
    }


    return (
        <AppContext.Provider value={value}>

            {children}

        </AppContext.Provider>

    )
}