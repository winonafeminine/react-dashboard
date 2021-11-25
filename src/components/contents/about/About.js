import React from 'react'
import './Detail.css'
import Header from './Header'
import Header1 from './Header1'
import Foot1 from './Foot1'
import Text from './Text'
import One from './img/1.png'

function App() {
    return (
         <div>       
        <Header/>  
        <Header1/> 
        <Text/>
        <div className="flex">
        <img src={One} alt="" align="center"/></div>
        <div class="box">
        <div><Foot1/></div>
          <div>Two</div>
          <div>Three</div>
        </div>
        </div>
 
    );
}

export default App;