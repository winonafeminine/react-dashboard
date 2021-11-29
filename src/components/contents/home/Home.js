import React from 'react';
import Homeheader from './Homeheader';
import MenuBar from './MenuBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from './Footer';
import Tooltips from './Tooltip';


function Home() {
    return (  
        <React.Fragment>
            
            
            <Box sx={{
                margin: '0 130px 0 130px',
            }}>
                {/* Header */}
                <Homeheader />
                {/* container */}
                <MenuBar />
                <Tooltips />
            </Box>
        </React.Fragment>
    )
}

export default Home
