import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import Badge from '@mui/material/Badge';

// icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledPaper = styled(Paper)
    (({theme}) => ({
        borderRadius: '12px',
        padding: '12px',
        width: '70%'
    }));

function ItDetail() {
    const itdetail = 'itdetail';
    // convert to object
    const strdata = localStorage.getItem(itdetail);
    // raw data
    const data = JSON.parse(strdata);
    // addCard;
    const [ addValue, setAddValue ] = React.useState(1);
    const [addToCard, setAddToCard] = React.useState();
    if (addValue < 1) {
        setAddValue(1)
    }
    
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <StyledPaper>
                    {/* container */}
                    <Box sx={{
                        '&.MuiBox-root': {
                            // width: '100%'
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                        }
                    }}>
                        {/* wrapper */}
                        <Box sx={{
                        '&.MuiBox-root': {
                            flexGrow: 1,
                            padding: '0 17px'
                        }
                    }}>
                        <Box sx={{
                            display: 'flex',
                        }}>
                            <Box sx={{
                                '&.MuiBox-root': theme => ({
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    '& img.itImg' : {
                                        width: '500px',
                                        borderRadius: '6px'
                                    }
                                })
                            }}>
                                <img className="itImg" src={data.src} alt=""/>
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
                                            margin: '0 10px'
                                        },
                                        '& Button:hover':{
                                            boxShadow: '0 0 2px 1px rgba(0, 140, 186, 0.5)'
                                        }
                                    }
                                }}>
                                    <Button>
                                        <img className="gallery" src={data.src} alt=""/>
                                    </Button>
                                    <Button>
                                        <img className="gallery" src={data.src} alt=""/>
                                    </Button>
                                    <Button>
                                        <img className="gallery" src={data.src} alt=""/>
                                    </Button>
                                    <Button>
                                        <img className="gallery" src={data.src} alt=""/>
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{
                                '&.MuiBox-root': {
                                    margin: '0 0 0 12px',
                                    
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    borderBottom: '1px solid',
                                    borderColor: '#D5D5D5',
                                    padding: '0 0 10px 0'
                                }}>
                                    <Typography sx={{
                                        margin: '0 0 6px 0',
                                    }} variant="h5">{data.name}</Typography>
                                    <Chip color="primary" variant="outlined" sx={{
                                        margin: '0 0 0 10px',                                   
                                    }} label="New" />
                                </Box>
                                <Typography sx={{
                                    margin: '6px 0 6px 0 '
                                }}>
                                    {data.des}
                                </Typography>
                                <Rating value={5} />
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'baseline'
                                }}>
                                    <Typography variant="h5" >
                                        {`฿${data.salePrice}`}
                                    </Typography>
                                    <Typography variant="h7" sx={{
                                        margin: '0 0 0 6px',
                                        textDecoration: 'line-through',
                                        color: 'red'
                                    }}>
                                        { `฿${data.price}`}
                                    </Typography>

                                </Box>
                                <ButtonGroup sx={{
                                    margin: '6px 0 0 0',
                                    '& Button':{
                                        width: '6px'
                                    }
                                }}>
                                    <Button onClick={ () => setAddValue(addValue + 1) }><AddIcon/></Button>
                                    <Button>{addValue}</Button>
                                    <Button onClick={ () => setAddValue(addValue - 1) }><RemoveIcon/></Button>
                                </ButtonGroup>
                                <Box sx={{
                                    display: 'flex',
                                    margin: '12px 0 0 0'
                                }}>
                                    <Button onClick={() => setAddToCard(addValue)} variant="outlined" startIcon={<AddShoppingCartIcon/>}>Add To Cart</Button>
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
            <Box sx={{ '& > :not(style)': { m: 1 },
            position: 'fixed',
            bottom: '30px',
            right: '30px'
            }}>
                <Badge badgeContent={addToCard} color="primary">
                    <Fab color="primary" aria-label="add" sx={{
                    backgroundColor: '#00bcd4'
                }}>
                    <ShoppingCartIcon />
                </Fab>
                </Badge>
            </Box>
        </React.Fragment>
    )
}

export default ItDetail
