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
                    display: 'flex'
                }}>
                    <Box sx={{
                        '&.MuiBox-root': theme => ({
                            '& img.sweaterImg' : {
                                width: '500px'
                            }
                        })
                    }}>
                        <img className="sweaterImg" src={data.src} alt=""/>
                    </Box>
                    <Box>
                        <Typography>{data.name}</Typography>
                        <Rating value={5} />
                        <Typography>{data.price}</Typography>
                        <Typography>{data.salePrice}</Typography>
                    </Box>
                </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Dtdetail
