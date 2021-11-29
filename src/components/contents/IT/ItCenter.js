import React from 'react';
import Homeheader from './ITheader';
import MenuBar from './MenuBar';
import Box from '@mui/material/Box';
import ItCard from './ItCard';
import Tooltips from './Tooltip';

function ItCenter() {
    return (  
        <React.Fragment>
                <Box sx={{
                    margin: '0 130px 0 130px',
                    '& ItCard.itcard':{
                        margin: '17px 0 0 0'
                    }
                }}>
                    {/* Header */}
                    <Homeheader />

                    {/* container */}
                    <MenuBar />
                    <Tooltips />
                    <ItCard/>
                </Box>
        </React.Fragment>
    )
}
export default ItCenter
