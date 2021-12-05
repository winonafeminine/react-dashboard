import React from "react";
import CatContext from "./CatContext";

const CatContextProvider = (props) => {
    const [contextState, setContextState] = React.useState({
        value: {},
        open: false
    });

    const setOpen = (open)=> {
        setContextState(state => ({
            ...state,
            open //open: open
        }))
    }

    const setValue = (value) => {
        setContextState(state => ({
            ...state,
            value
        }))
    }
    const contextValue = {
        value: contextState.value, 
        open: contextState.open, 
        setOpen,
        setValue
    }
    return (
    <CatContext.Provider value={contextValue}>
        {props.children}
    </CatContext.Provider>)
}

export default CatContextProvider;