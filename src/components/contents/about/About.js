import React, { useState } from 'react'
import './Detail.css'
import Products1 from './Products1'
import Products2 from './Products2'
import Text from './Text'
import FlexDirection from './FlexDirection'


function App() {
    return (
         <div>   
        <Text/>        
        <div className="App-header">
            <Products1/> 
                </div>
        <div className="App-header">
            <Products2/> 
                </div>
        <FlexDirection/>
        </div>
        
         
    );
}

export default App;
