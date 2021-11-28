import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { clotTheme } from '../../UIs/theme/clotTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

function ProductDetail1() {
    const clotdetail = 'clotdetail';
    // convert to object
    const strdata = localStorage.getItem(clotdetail);
    // raw data
    const data = JSON.parse(strdata);
    // console.log(data);
    return (
        <ThemeProvider theme={clotTheme}>
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
                            '& img.catImg' : {
                                width: '500px'
                            }
                        })
                    }}>
                        <img className="catImg" src={data.src} alt=""/>
                    </Box>
                    <Box>
                        <Typography>{data.name}</Typography>
                        <Rating value={4} />
                        <Typography>{data.price}</Typography>
                        <Typography>{data.Price1}</Typography>
                    </Box>
                </Box>
                </Box>
            </Box>
        </React.Fragment>
        </ThemeProvider>
    )
}

export default ProductDetail1;
