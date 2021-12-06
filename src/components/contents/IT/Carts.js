import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { itTheme, MaterialUISwitch } from '../../UIs/theme/itTheme';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';

//icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Theme = React.createContext({
    dark: '#0D0037' ,
    light: '#D6EAF8'
})

export default function Carts() {
    const contextValue ={
        dark: '#0D0037' ,
        light: '#D6EAF8'
    }
    const [state, setState] = React.useState("#0D0037") ;
    const context = React.useContext(Theme);
    const ChangeTheme = () => {
        if(context.light === "#D6EAF8")
        {
            setState("#0D0037")
        }else
        {
            setState("#D6EAF8")
        }
    }
    React.useEffect(() => {
        context.light = state;
    },[ChangeTheme]);

    const [clicked, setClicked] = React.useState(false);
    const itCardkey = 'itCardkey'; 
    const itCartStr = localStorage.getItem(itCardkey);
    React.useEffect(() => {
        const itCartStr = localStorage.getItem(itCardkey);
        itCart = JSON.parse(itCartStr);
        // eslint-disable-next-line
    }, [clicked]);
    let itCart = JSON.parse(itCartStr);
    let item = [];
    let amount = 0;
    let price = 0;
    itCart.map((value, ind) => {
        ind +=1;
        amount += value.amount;
        price = value.price;
        item.push(ind);
    })
    console.log(amount)

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
        setClicked(c => !c)
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
        setClicked(c => !c) 
    }
    const handleRemovevITInCart = (index)=> {
        itCart.splice(index, 1);
        const cart = JSON.stringify(itCart);
        localStorage.setItem(itCardkey, cart);
        setClicked(!clicked);
    }

    return (
        <Theme.Provider value={contextValue}>
            <>
            <CssBaseline/>
            <Box sx={{backgroundColor: context.light, width: '98%', margin: "0 auto", borderRadius: '12px 12px 0 0',}}>
                <Box sx={{ flexGrow: 1, width: '97%', margin: "20px auto" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ '.MuiPaper-root':{ padding: '15px', borderRadius: '12px',}}}>
                            <Item sx={{display: 'flex', }}>
                                <Box sx={{width: '95%'}}>
                                    <Typography sx={{fontSize: '20px',}}>Checkout</Typography>
                                </Box>
                                <Box>
                                    <FormControlLabel
                                        control={<MaterialUISwitch onChange={ ChangeTheme }/>}
                                        label="Mode"
                                    />
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sx={{ '.MuiPaper-root':{padding: '29px', borderRadius: '12px',}}}>
                            <Item >
                                <Box>
                                    <Grid sx={{display: 'flex',}}>
                                        <Grid item xs={4} md={2}>
                                            <Box sx={{'.css-1f0bsb5-MuiButtonBase-root-MuiButton-root': {alignItems: 'flex-start', width: '100%', borderRadius: '12px', color: '#00bcd4',}}}>
                                                <Button sx={{textTransform: 'none', padding: '20px',}}>
                                                    <ShoppingCartOutlinedIcon />
                                                    <Box sx={{textAlign: 'left', marginLeft: '10px', }}>
                                                        <Typography>User Profile </Typography>
                                                        <Typography sx={{fontSize: '11px', color: 'gray'}}>Product Added</Typography> 
                                                    </Box>
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Box sx={{'.css-1f0bsb5-MuiButtonBase-root-MuiButton-root': {alignItems: 'flex-start', width: '100%', borderRadius: '12px', color: '#00bcd4',}}}>
                                                <Button sx={{textTransform: 'none', padding: '20px'}}>
                                                    <BusinessOutlinedIcon />
                                                    <Box sx={{textAlign: 'left', marginLeft: '10px', }}>
                                                        <Typography>Billing Address</Typography>
                                                        <Typography sx={{fontSize: '11px', color: 'gray'}}>Billing Information</Typography> 
                                                    </Box>
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={4} md={2}>
                                            <Box sx={{'.css-vcaatr-MuiButtonBase-root-MuiButton-root': {alignItems: 'flex-start', width: '100%', borderRadius: '12px', color: '#00bcd4',}}}>
                                                <Button sx={{textTransform: 'none', padding: '20px', width: '100%', }}>
                                                    <CreditCardOutlinedIcon />
                                                    <Box sx={{textAlign: 'left', marginLeft: '10px'}}>
                                                        <Typography>Payment</Typography>
                                                        <Typography sx={{fontSize: '11px', color: 'gray'}}>Add & Update Card</Typography> 
                                                    </Box>
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box sx={{margin: '20px 0 0 0'}}>
                                    <Typography>Cart Item ({item.length})</Typography>
                                </Box>
                                <Divider sx={{margin: '20px 0'}} />
                                <Box sx={{display: 'flex', margin: '20px 0 0 0',}}>
                                    <Box sx={{width: '40%', paddingLeft: '12px'}}>
                                        <Typography>Product</Typography>
                                    </Box>
                                    <Box sx={{width: '15%'}}>
                                        <Typography>Price</Typography>
                                    </Box>
                                    <Box sx={{width: '25%'}}>
                                        <Typography>Quantity</Typography>
                                    </Box>
                                    <Box sx={{width: '15%'}}>
                                        <Typography>Total</Typography>
                                    </Box>
                                    <Box>
                                        <Typography></Typography>
                                    </Box>
                                </Box>
                                {
                                    itCart.map((value, ind) => (
                                    <Box key={value.name} sx={{margin: '20px 0'}}>
                                        <Divider sx={{margin: '20px 0 10px 0'}} />
                                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                                            <Box sx={{display: 'flex', width: '40%', whiteSpace: 'nowrap', 'img':{width: '15%'}}}>
                                                <img src={value.src} alt="" />
                                                <Typography sx={{marginLeft: '10px', textOverflow: 'ellipsis', overflow: 'hidden',}}>{value.name}</Typography>
                                            </Box>
                                            <Box sx={{width: '15%'}}>
                                                <Typography>
                                                    {`$${value.price}`}
                                                </Typography>
                                                <Typography sx={{textDecoration: 'line-through', fontSize: '12px'}}>
                                                    {`$${value.salePrice}`}
                                                </Typography>
                                            </Box>
                                            <Box sx={{width: '25%'}}>
                                                <ButtonGroup sx={{
                                                    '.MuiButton-root':{
                                                    borderColor: '#00bcd4',
                                                    color: '#00bcd4',           
                                                    },
                                                }}>
                                                    <Button onClick={() => handleAddAmount(value)} className="btnAdd" ><AddIcon/></Button>
                                                    <Button>{value.amount}</Button>
                                                    <Button onClick={() => handleRemoveAmount(value)} className="btnRemove" ><RemoveIcon/></Button>
                                                </ButtonGroup>
                                            </Box>
                                            <Box sx={{width: '15%'}}>
                                                <Typography>
                                                    {`$${value.price*value.amount}`}
                                                </Typography>
                                            </Box>
                                            <Box sx={{width: '5%'}}>
                                                <IconButton onClick={() => handleRemovevITInCart(ind)} ><DeleteOutlineIcon/></IconButton>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                                <Box sx={{
                                    padding: '20px', 
                                    width: '97%', 
                                    margin: '40px auto', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(52, 152, 219, 0.1)',

                                    }}>
                                    <Box>
                                        <Typography sx={{color: 'black'}}>Order Summary</Typography>
                                    </Box>
                                    <Divider sx={{margin: '10px 0'}} />
                                    <Box sx={{display: 'flex'}}>
                                        <Typography sx={{fontSize: '14px', width: '95%'}}>Sub Total</Typography>
                                        <Typography sx={{fontSize: '14px', textAlign: 'right', width: '5%'}}>{`$${price*amount}`}</Typography>
                                    </Box>
                                    <Divider sx={{margin: '10px 0'}} />
                                    <Box sx={{display: 'flex'}}>
                                        <Typography sx={{fontSize: '14px', width: '95%'}}>Coupon Discount</Typography>
                                        <Typography sx={{fontSize: '14px', textAlign: 'right', width: '5%'}}>-</Typography>
                                    </Box>
                                    <Divider sx={{margin: '10px 0'}} />
                                    <Box sx={{display: 'flex'}}>
                                        <Typography sx={{fontSize: '14px', width: '95%'}}>Shipping Charges</Typography>
                                        <Typography sx={{fontSize: '14px', textAlign: 'right', width: '5%'}}>-</Typography>
                                    </Box>
                                    <Divider sx={{margin: '10px 0'}} />
                                    <Box sx={{display: 'flex', color: 'black'}}>
                                        <Typography sx={{width: '95%',}}>Total</Typography>
                                        <Typography sx={{textAlign: 'right', width: '5%'}}>{`$${price*amount}`}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{width: '98%', display: 'flex', margin: '30px 0 0 0'}}>
                                    <Box sx={{width: '80%',}}>
                                    </Box>
                                    <Box sx={{width: '20%'}}>
                                        <Button sx={{width: '100%', backgroundColor: '#00bcd4', ':hover':{backgroundColor: '#3498DB'}}} variant="contained" startIcon={<ShoppingCartCheckoutRoundedIcon />}>Check Out</Button>
                                    </Box>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
        </Theme.Provider>
    )
}
