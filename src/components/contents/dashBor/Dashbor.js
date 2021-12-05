import React from 'react'

// step ที่
const Theme = React.createContext({
    dark: 'pink' ,
    light: 'blue'
})

function Detail() {
    const context = React.createContext(Theme);
    return <label>theme color: {context.dark} </label>
}

function Card() {
    const context = React.useContext(Theme);
    return (
        <div style ={{
            height: '100px' ,
            width: '200px' ,
            background: context.dark
        }}>
            <Detail/>
        </div>
    )
}

function DashBorBtn (props) {
    const [state, setState] = React.useState("purple") ;
    // step ที่ 2
    const context = React.useContext(Theme);

    const changeTheme = () => {
        if(context.dark === 'purple')
        {
            setState("orange")
        }else
        {
            setState("purple")
        }
    }

    React.useEffect(() => {
        context.dark = state ;
    },[state]);

    return (
        <>
            <Card/>
            <button onClick={changeTheme} style={{background: context.dark}}>Submit</button>
        </>
    )
}
function dashbor() {
    // step ที่ 3 
    const contextValue = {
        dark: 'pink' ,
        light: 'white'
    }

    // step ที่ 2
    return (
        <Theme.Provider value={contextValue}>
            <DashBorBtn/>
        </Theme.Provider>
    )
}

export default dashbor
