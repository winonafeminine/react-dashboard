import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function Footer() {
    return (
        <Box className="footer" sx={{
            '&.MuiGrid-root': theme => ({
            width: '100%',
            height: '30rem',
            alignItems: 'center',
            borderRadius: '10px',
            
            })
        }}>    
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <Box>xs=6 md=8</Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box>xs=6 md=4</Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
