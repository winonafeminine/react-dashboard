import React from 'react';

const CatContext = React.createContext({
    value: {}, 
    open: false, 
    setOpen: ()=>{},
    setValue: (value)=>{}
});

export default CatContext;