import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';

// icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledPaper = styled(Paper)
    (({theme}) => ({
        borderRadius: '12px',
        padding: '12px',
        width: '70%'
    }));

function CatDetail() {
    const catdetail = 'catdetail';
    // convert to object
    const strdata = localStorage.getItem(catdetail);
    // raw data
    const data = JSON.parse(strdata);
    // console.log(data);
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <StyledPaper>
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
                            width: '80%'
                        }
                    }}>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            <Box sx={{
                                '&.MuiBox-root': theme => ({
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    '& img.catImg' : {
                                        width: '500px',
                                        borderRadius: '6px'
                                    }
                                })
                            }}>
                                <img className="catImg" src={data.src} alt=""/>
                                <Box sx={{
                                    '&.MuiBox-root': {
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        margin: '6px 0 0 0',
                                        '& .gallery': {
                                            width: '75px',
                                            height: '75px',
                                            borderRadius: '12px',
                                            margin: '0 3px'
                                        }
                                    }
                                }}>
                                    <img className="gallery" src={data.src} alt=""/>
                                    <img className="gallery" src={data.src} alt=""/>
                                    <img className="gallery" src={data.src} alt=""/>
                                </Box>
                            </Box>
                            <Box sx={{
                                '&.MuiBox-root': {
                                    margin: '0 0 0 12px'
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex'
                                }}>
                                    <Typography sx={{
                                        margin: '0 0 6px 0'
                                    }} variant="h5">{data.name}</Typography>
                                    <Chip color="primary" sx={{
                                        margin: '0 0 0 6px',
                                    }} label="New" />
                                </Box>
                                <Typography sx={{
                                    margin: '0 0 6px 0  '
                                }}>
                                    {data.des}
                                </Typography>
                                <Rating value={5} />
                                <Box sx={{
                                    display: 'flex'
                                }}>
                                    <Typography >{`฿${data.salePrice}`}</Typography>
                                    <Typography sx={{
                                        margin: '0 0 0 6px',
                                        textDecoration: 'line-through'
                                    }}>{ `฿${data.price}`}</Typography>

                                </Box>
                                <ButtonGroup sx={{
                                    margin: '6px 0 0 0'
                                }}>
                                    <Button><AddIcon/></Button>
                                    <Button>0</Button>
                                    <Button><RemoveIcon/></Button>
                                </ButtonGroup>
                                <Box sx={{
                                    display: 'flex',
                                    margin: '12px 0 0 0'
                                }}>
                                    <Button variant="outlined" startIcon={<AddShoppingCartIcon/>}>Add To Cart</Button>
                                    <Button sx={{
                                        margin: '0 0 0 6px'
                                    }} variant="contained" startIcon={<LocalMallIcon/>}>Buy Now</Button>
                                </Box>
                            </Box>
                        </Box>
                        </Box>
                    </Box>
                </StyledPaper>
            </Box>
        </React.Fragment>
    )
}

export default CatDetail
