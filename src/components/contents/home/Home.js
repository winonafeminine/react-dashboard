import React from 'react';
import './style/Home.css';
import Homeheader from './Homeheader';
import Homecontainer from './Homecontainer';


function Home() {
    return (  
        <div className="home">
            <div className="home header">
                <Homeheader />
            </div>         
            <div className="home container">
                <Homecontainer />
            </div>
        </div> 
    )
}

export default Home
