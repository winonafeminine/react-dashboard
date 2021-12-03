import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import Carts from './Carts';

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

function ItDetail() {
    const itdetail = 'itdetail';
    // convert to object
    const strdata = localStorage.getItem(itdetail);
    // raw data
    const data = JSON.parse(strdata);
    // addCard;
    const [ITImg, setITImg] = React.useState(data.src);
    const handleITImgClick = (e, src) => {
        setITImg(src);
    }
    const [ addValue, setAddValue ] = React.useState(1);
    const [addToCard, setAddToCard] = React.useState();
    if (addValue < 1) {
        setAddValue(1)
    }
    return (
        <>
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
                                    <img className="itImg" src={ITImg} alt="" />
                                    <Box  sx={{
                                        '&.MuiBox-root': {
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            margin: '6px 6px 0 6px',
                                            '& .itgallery': {
                                                width: '75px',
                                                height: '75px',
                                                borderRadius: '12px',
                                            },
                                            '& Button':{
                                                margin: '0 4px',
                                                borderRadius: '17px',
                                                border: 'none',
                                                background: 'white',
                                                cursor: 'pointer',
                                                '&:hover':{
                                                    boxShadow: '0 0 10px 2px rgba(0, 140, 186, 0.5)',
                                                }
                                            },
                                        }
                                    }}> 
                                        {
                                            data.ITGallery.map(value => (
                                                <button key={value} onClick={(e) => handleITImgClick(e, value)}>
                                                    <img className="itgallery" src={value} alt=""/>
                                                </button> 
                                            ))
                                        }
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
                                        <Button onClick={ () => setAddToCard(addValue) } variant="outlined" startIcon={<AddShoppingCartIcon/>}>Add To Cart</Button>
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
            <Carts />
        </>
    )
}
export default ItDetail