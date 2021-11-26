import React from 'react';
// import './style/Home.css';
import Homeheader from './Homeheader';
import Homecontainer from './Homecontainer';
import Box from '@mui/material/Box';


function Home() {
    return (  
        <React.Fragment>
            {/* container */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Box className="home" sx={{
                    '&.MuiBox-root': theme => ({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '65%'
                    })
                }}>
                    <Box className="home header" sx={{
                        
                    }}>
                        <Homeheader />
                    </Box>         
                    <Box className="home container" sx={{
                        width: '100%'
                    }}>
                        <Homecontainer />
                    </Box>
                </Box> 
            </Box>
            </React.Fragment>
    )
}

export default Home
