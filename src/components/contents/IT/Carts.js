import React from 'react';
import Box from '@mui/material/Box';
import Modal  from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography';

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

// style
import { cartscontainer } from './../../UIs/theme/itTheme';

const breakpoint = {
    width: '50vw',
    height: '100vh'
  }


export default function Carts(props) {
    const [localData, setLocalData] = React.useState([]);
    const {iteminCart, setiteminCart} = props;
    const [Open, setOpen] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const itCardkey = 'itCardkey'; 
    const itCartStr = localStorage.getItem(itCardkey);
    let itCart = JSON.parse(itCartStr);
    const itdetail = 'itdetail';
    const strdata = localStorage.getItem(itdetail);
    const data = JSON.parse(strdata);
    React.useEffect(() => {
        const itCartStr = localStorage.getItem(itCardkey);
        const itCart = JSON.parse(itCartStr);
        if(!localData.includes(data))
        {
            if(itCart !== null)
            {
                setLocalData(itCart);
            }
            return;
        }
        
    }, [clicked]);

    const handleAddAmount = (value) => {
        itCart.map((val) => {
            if(val.name === value.name)
            {
                val.amount += 1;
            }
            return val;
        });
        const cart = JSON.stringify(itCart);
        localStorage.setItem(itCardkey, cart);
        setClicked(c => !c) //setClicked(!clicked);
    }

    const handleRemoveAmount = (value) => {
        itCart.map((val) => {
            if(val.amount === 1)
             {
                return;
            }
            if(val.name === value.name)
            {   

                val.amount -= 1;
            }
            return val;
        });
        const cart = JSON.stringify(itCart);
        localStorage.setItem(itCardkey, cart);
        setClicked(c => !c) //setClicked(!clicked);
    }

    const handleRemovevCatInCart = (index)=> {
        itCart.splice(index, 1);
        const cart = JSON.stringify(itCart);
        localStorage.setItem(itCardkey, cart);
        setClicked(!clicked);
    }
    return (
        <Box>
            <Box sx={{ '& > :not(style)': { m: 1 },
            position: 'fixed',
            bottom: '30px',
            right: '30px'
            }}>
                <Badge badgeContent={iteminCart} color="primary" onClick={() => setOpen(true)}>
                    <Fab color="primary" aria-label="add" sx={{
                    backgroundColor: '#00bcd4'
                }}>
                    <ShoppingCartIcon />
                </Fab>
            </Badge>
            </Box>
            {
                itCart.map((value, ind) => (
                <Modal open={Open} key={value.name} >
                <Container sx={cartscontainer}>
                    <form breakpoints={breakpoint}>
                        <Grid >
                            <Grid sx={{margin: '10px 0'}}>
                                <Box>
                                    Cart Item
                                </Box>
                            </Grid>
                            <Divider sx={{margin: '10px 0'}} />
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Grid sx={{width: '150px'}}>
                                    <Box>
                                        Products
                                    </Box>
                                </Grid>
                                <Grid sx={{width: '90px'}}>
                                    <Box>
                                        Price
                                    </Box>
                                </Grid>
                                <Grid sx={{width: '100px'}}>
                                    <Box>
                                        Quantity
                                    </Box>
                                </Grid>
                                <Grid sx={{width: '90px'}}>
                                    <Box>
                                        Total
                                    </Box>
                                </Grid>
                            </Box>
                            <Divider sx={{margin: '10px 0'}} />
                            {
                                itCart.map((value, ind) => (
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                            }} key={value.name}>
                                    <Grid sx={{
                                    width: '150px',
                                    
                                    '& .itInCartImg':{
                                        width: '75px',
                                        height: '75px'
                                    }
                                    }} >
                                        <img className="itInCartImg" src={value.src} alt="" />
                                        <Typography sx={{
                                            fontSize: 12,
                                        }}>
                                            {value.name}
                                        </Typography>                
                                    </Grid>
                                <Grid sx={{width: '90px'}}>
                                    <Typography>
                                        {`$${value.price}`}
                                    </Typography>                   
                                </Grid>
                                <Grid sx={{width: '100px'}}>
                                    <ButtonGroup orientation="vertical" sx={{
                                        margin: '0 12px 0 0',
                                        
                                        '.MuiButton-root':{
                                           borderColor: '#00bcd4',
                                           color: '#00bcd4',           
                                        },
                                        '.btnAdd': {
                                           height: '25px', 
                                        },
                                        '.btnRemove': {
                                           height: '25px' 
                                        }
                                    }}>
                                        <Button className="btnAdd" onClick={() => handleAddAmount(value)}><AddIcon/></Button>
                                        <Button>{value.amount}</Button>
                                        <Button className="btnRemove" onClick={() => handleRemoveAmount(value)}><RemoveIcon/></Button>
                                    </ButtonGroup>                   
                                </Grid>
                                <Grid sx={{width: '50px'}}>
                                    <Typography>
                                    {`$${value.price*value.amount}`}
                                    </Typography>                   
                                </Grid>
                                <Grid >
                                    <IconButton onClick={() => handleRemovevCatInCart(ind)}><DeleteOutlineIcon/></IconButton>                  
                                </Grid>
                                <Divider sx={{margin: '10px 0'}} />
                            </Box>
                            ))}
                                <Grid container spacing={2} sx={{display: 'flex', marginTop: 2, paddingRight: 2, paddingBottom: 2}}>
                                <Grid item xs={6} md={6} sx={{padding: '0px'}}>
                                    <Button sx={{  width: '100%', '&.MuiButton-root':{borderRadius: '17px'}, }} 
                                    variant="contained" startIcon={<LocalMallIcon/>}>Buy Now</Button>
                                </Grid> 
                                <Grid item xs={6} md={6} sx={{}}>
                                    <Button color="error" onClick={ () => setOpen(false) } variant="outlined" startIcon={<CancelPresentationIcon/>} sx={{ width: '100%', '&.MuiButton-root':{borderRadius: '17px'} }}>Cancel</Button>
                                </Grid>              
                            </Grid> 
                        </Grid>
                    </form>
                </Container>
            </Modal>    
                
            ))}
            
        </Box>
    )
}