import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import CartDrawer from './CartDrawer';
import { ItDetailgallery } from './../../UIs/theme/itTheme';
import Divider from '@mui/material/Divider'

// icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid } from '@mui/material';

const StyledPaper = styled(Paper)
    (({theme}) => ({
        borderRadius: '12px',
        padding: '12px',
        width: '70%'
    }));

function ItDetail() {
    const [localData, setLocalData] = React.useState([]);
    const [clicked, setClicked] = React.useState(false); 
    const itCardkey = 'itCardkey'; 
    const [amount, setAmount] = React.useState(1);
    const itdetail = 'itdetail';
    // convert to object
    const strdata = localStorage.getItem(itdetail);
    // raw data
    const data = JSON.parse(strdata);
    React.useEffect(() => {
        const itStr = localStorage.getItem(itCardkey);
        const itCart = JSON.parse(itStr);
        if(!localData.includes(data))
        {
            if(itCart !== null)
            {
                setLocalData(itCart);
            }
            return;
        }
        // eslint-disable-next-line
    }, [clicked]);

    // console.log(data);
    const [ITImg, setITImg] = React.useState(data.src);

    const handleITImgClick = (e, src) => {
        setITImg(src)
    }
    
    const handleAddClick = (index) => {
        // const catCartKey = ''
        const itCartStr = localStorage.getItem(itCardkey);
            setAmount(amount + 1);
            if(itCartStr === null)
                {
                    return;
                }
             // not null
            let itCart = JSON.parse(itCartStr);
        itCart.map((value, ind) => {
            if(value.name === data.name)
            {
                value['amount'] = amount + 1;
            }
            return value;
        });
        itCart = JSON.stringify(itCart);
        // console.log()
        localStorage.setItem(itCardkey, itCart);
    }

    const handleRemoveClick = (index) => {
        // const catCartKey = ''
        const itCartStr = localStorage.getItem(itCardkey);
             if(amount === 1)
        {
            // break
            return;
        }
            setAmount(amount - 1);
            if(itCartStr === null)
                {
                    return;
                }
             // not null
            let itCart = JSON.parse(itCartStr);
        itCart.map((value, ind) => {
            if(value.name === data.name)
            {
                value['amount'] = amount - 1;
            }
            return value;
        });
        itCart = JSON.stringify(itCart);
        localStorage.setItem(itCardkey, itCart);
    }

    const handleAddToCart = (e, value) => {
        setClicked(!clicked);
        let itCart = JSON.parse(localStorage.getItem(itCardkey));
        let itCartStr = JSON.stringify(itCart);
        
        if (itCart === null)
        {
            itCart = [];
            data['amount'] = amount;
            itCart.push(data);
            itCartStr = JSON.stringify(itCart);
            localStorage.setItem(itCardkey,itCartStr);
            return;
        }else{  
            let exist = false;
            itCart.map((value) => {
                if(value.name === data.name)
                {
                    exist = true;
                }
                return value;
            });

            if(exist)
            {
                return;
            }
            // clothCart.push(data);
        
        itCart.push(data);
        itCartStr = JSON.stringify(itCart);
        localStorage.setItem(itCardkey,itCartStr);
        }
    }
    
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <StyledPaper>
                    {/* container */}
                    <Grid container spacing={2} sx={{padding: '17px'}}>
                        <Grid item xs={12} md={6}>
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
                                <Box  sx={ ItDetailgallery }> 
                                    {
                                        data.ITGallery.map(value => (
                                            <button key={value} onClick={(e) => handleITImgClick(e, value)}>
                                                <img className="itgallery" src={value} alt=""/>
                                            </button> 
                                        ))
                                    }
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Box sx={{
                                    '&.MuiBox-root': {
                                        margin: '0 0 0 12px',
                                        width: '500px'
                                    }
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        borderColor: '#D5D5D5',
                                    }}>
                                        <Typography sx={{
                                            margin: '0 0 6px 0',
                                        }} variant="h5">{data.name}</Typography>
                                        <Chip color="primary" variant="outlined" sx={{
                                        }} label="New" />
                                    </Box>
                                    <Divider sx={{margin: '10px 0'}} />
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
                                        <Button onClick={ handleAddClick }><AddIcon/></Button>
                                        <Button>{ amount }</Button>
                                        <Button onClick={ handleRemoveClick }><RemoveIcon/></Button>
                                    </ButtonGroup>
                                    <Box sx={{
                                        display: 'flex',
                                        margin: '12px 0 0 0'
                                    }}>
                                        <Button onClick={ handleAddToCart } variant="outlined" startIcon={<AddShoppingCartIcon/>}>Add To Cart</Button>
                                        <Button sx={{
                                            margin: '0 0 0 6px'
                                        }} variant="contained" startIcon={<LocalMallIcon/>}>Buy Now</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{
                        '&.MuiBox-root': {
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
                            
                        </Box>
                    </Box>
                </StyledPaper>
            </Box>
            <CartDrawer 
                iteminCart={ localData === null ? 0 : localData.length }
                amount={data.amount}
            />
        </>
    )
}
export default ItDetail