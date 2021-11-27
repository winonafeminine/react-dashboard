import React, { useState } from 'react'
import './Detail.css'
import Header from './Header'
import Text from './Text'
import Products from './Products'
import FlexDirection from './FlexDirection'
import Box from './Box'
import One from './img/4.png'
function App() {
    return (
         <div>        
        <Text/>
        <FlexDirection/>
        <Products/> 
        <div className="flex2"><Box/></div>
        <div className="flex1"><img src={One} alt="" align="center"/></div>       
        </div>
         
    );
}

export default App;
