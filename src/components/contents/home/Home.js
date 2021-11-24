import React from 'react';
import './Home.css';

function Home() {
    return (  
        <div className="home">         
            <div className="home-container">
                <div>
                    <div className="search-container">
                        <input type="text" placeholder="Search.." name="search" /> 
                        
                    </div>
                <h1>Hello, <span></span></h1>
                <h1>Welcome to Winina Feminine Websites.<span></span></h1>
                <a href="#" type="button" className="sign-in">Sign in</a>
                </div>
            </div>
        </div> 
    )
}

export default Home
