import React from 'react';
import './Home.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {
    return (  
        <div className="home">         
            <div className="home-container">
                <div>
                    <div className="search-container">
                        <TextField variant="standard" type="text" placeholder="Search.." name="search" label="Search" fullWidth/> 
                        
                    </div>
                <h1>Hello, <span></span></h1>
                <h1>Welcome to Winina Feminine Websites.<span></span></h1>
                <Button variant="contained" type="button" className="sign-in">Sign in</Button>
                </div>
            </div>
        </div> 
    )
}

export default Home
