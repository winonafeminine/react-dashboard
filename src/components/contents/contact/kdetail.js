import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Kdetail() {
    const kpopdetail= 'kpopdetail';
    // convert to object
    const strkdata = localStorage.getItem(kpopdetail);
    // raw data
    const kdata = JSON.parse(strkdata);
    console.log(kdata);
    return (
        <React.Fragment>
            {/* container */}
            <Box sx={{ 
                '&.MuiBox-root': {
                    // width: '100%'
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center'
                }
            }}>
                {/* wrapper */}
                <Box sx={{
                '&.MuiBox-root': {
                    // width: '100%'
                    width: '70%'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent:'center'
                }}>
                    <Box sx={{ 
                        '&.MuiBox-root': theme => ({
                            '& img.catImg' : {
                                width: '50px',
                                height:'50px'
                            }
                        })
                    }}>
                        <img className="kImg" src={kdata.src} alt="" width='100%' height ='70%'/>
                        <Box sx ={{display: 'flex',
                        justifyContent:'center'
                        }}>
                        <Typography variant = "h4" sx ={{
                            color : 'darksalmon'
                        }}>{kdata.title} </Typography>
                    </Box>   
                    <Typography variant = "subtitle1" sx ={{
                        textAlign : 'center'
                    }}>{kdata.des}</Typography>
                    </Box> 
                               
                </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Kdetail
