import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


function Dtdetail() {
    const dtdetail = 'dtdetail';
    // convert to object
    const strdata = localStorage.getItem(dtdetail);
    // raw data
    const data = JSON.parse(strdata);
    // console.log(data);
    return (
        <React.Fragment>
            {/* container */}
            <Box sx={{
                '&.MuiBox-root': {
                    // width: '100%'
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#4caf50'
                
                }
            }}>
                {/* wrapper */}
                <Box sx={{
                '&.MuiBox-root': {
                    // width: '100%'
                    width: '70%',
                    backgroundColor: '#4caf50'
                }
            }}>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box sx={{
                        '&.MuiBox-root': theme => ({
                            '& img.sweater' : {
                                width: '500px',
                                backgroundColor: '#4caf50'
                            }
                        })
                    }}>
                        <img  className="sweater" src={data.src} alt=""/>
                    </Box>
                    <Box textAlign="center" >
                        <Typography><b>{data.title}</b></Typography>
                        <Rating value={5} />
                        <Typography><b>Price : 19</b></Typography>
                        <Typography><b>Size : M-L-XL</b></Typography>
                   
                       
                    </Box>
                </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Dtdetail
