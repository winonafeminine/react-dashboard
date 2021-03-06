import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { clotTheme } from '../../UIs/theme/clotTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Radio from '@mui/material/Radio';
import Badge from '@mui/material/Badge';
import ClothesCartDrawer from './ClothesCartDrawer';
// import { ExitToApp } from '@mui/icons-material';

const StyledPaper = styled(Paper)
    (({theme}) => ({
        borderRadius: '12px',
        padding: '12px',
        width: '70%'
    }));

function ProductDetail1() {
    const [localData, setLocalData] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [openClothesDrawer, setOpenClothesDrawer] = React.useState(false);
  
    const clothCardkey = 'clothCardkey'; 
  
    const [amount, setAmount] = React.useState(0);

    const clotdetail = 'clotdetail';
    // convert to object
    const strdata = localStorage.getItem(clotdetail);
    // raw data
    const data = JSON.parse(strdata);

    React.useEffect(() => {
        const clothStr = localStorage.getItem(clothCardkey);
        const clothCart = JSON.parse(clothStr);
        if(!localData.includes(data))
        {
            if(clothCart !== null)
            {
                setLocalData(clothCart);
            }
            
            return;
        }
        // console.log(data);
    }, [clicked]);

    // console.log(data);
    const [clothImg, setClothImg] = React.useState(data.src);

    const handleClothImg = (e, src) => {
        setClothImg(src)
    }

    const handleAddClick = (index) => {
        // const catCartKey = ''
        const clothesCartStr = localStorage.getItem(clothCardkey);
            setAmount(amount + 1);
            if(clothesCartStr === null)
                {
                    return;
                }
             // not null
            let clothesCart = JSON.parse(clothesCartStr);
        clothesCart.map((value, ind) => {
            if(value.name === data.name)
            {
                value['amount'] = amount + 1;
            }
            return value;
        });
        clothesCart = JSON.stringify(clothesCart);
        // console.log()
        localStorage.setItem(clothCardkey, clothesCart);
    }

    const handleRemoveClick = (index) => {
        // const catCartKey = ''
        const clothesCartStr = localStorage.getItem(clothCardkey);
             if(amount === 0)
        {
            // break
            return;
        }
            setAmount(amount - 1);
            if(clothesCartStr === null)
                {
                    return;
                }
             // not null
            let clothesCart = JSON.parse(clothesCartStr);
        clothesCart.map((value, ind) => {
            if(value.name === data.name)
            {
                value['amount'] = amount - 1;
            }
            return value;
        });
        clothesCart = JSON.stringify(clothesCart);
        // console.log()
        localStorage.setItem(clothCardkey, clothesCart);
    }

    const handleAddToCard = (e) => {
        setClicked(!clicked);
        let clothCart = JSON.parse(localStorage.getItem(clothCardkey));
        let clothCartStr = JSON.stringify(clothCart);

        if (clothCart === null)
        {
            clothCart = [];
            data['amount'] = amount;
            clothCart.push(data);
            clothCartStr = JSON.stringify(clothCart);
            localStorage.setItem(clothCardkey,clothCartStr);
            return;
        }  
            let exist = false;
            clothCart.map((value) => {
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

        clothCart.push(data);
        clothCartStr = JSON.stringify(clothCart);
        localStorage.setItem(clothCardkey,clothCartStr);
    }

    const handleOpenClothesCartDrawer = () => {
        setOpenClothesDrawer(true);
    }

    return (
        <div className="App-header"> 
            <ThemeProvider theme={clotTheme}>
            <React.Fragment>
           {/* <button onClick={() => setButonText ("Thanks, been Clicked")}>{buttonText}</button>
               <h>{setincrememt}</h> */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '70px 0 6px 0'
            }}>
                 <StyledPaper>   

                    <Box sx={{
                        '&.MuiBox-root':{
                        // width: '100%',
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center'
                            }
                        }}>

                    {/* wrapper */}
                    <Box sx={{
                        '&.MuiBox-root': {
                        // height: '100px',
                            width: '100%'
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
                                height: '450px',
                                borderRadius: '6px'
                                }
                            })
                            }}>
                                <img className="catImg" src={clothImg} alt=""/>
                       
                            <Box sx={{
                                    '&.MuiBox-root': theme => ({
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        margin: '6px 0 0 0',
                                        boxShadow: '0 0 5px 0 rgba(0, 140 106, 0.5)' ,
                                        transition: theme.transitions.create(['box-shadow', 'transform'],{
                                        duration: theme.transitions.duration.standard
                                        }),
                                        '& .gallery': {
                                            width: '75px',
                                            height: '75px',
                                            borderRadius: '12px',
                                            margin: '0 3px',
                                            cursor: 'pointer'
                                        }, '&:hover': {
                                           boxShadow : '0 0 10px 10px rgba(0, 140 106, 0.5)',
                                           transform: 'scale(1.2)'
                                        }
                                    })
                                }}>
                                    {
                                        data.gallery.map(value => (
                                            <img className="gallery" src={value} alt=""
                                                onClick={(e) => handleClothImg(e, value)}
                                            />
                                        ))
                                    }
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
                                         margin: '0 0 6px 0',
                                      }} variant="h3">{data.name}                                    
                                    </Typography>
                                
                                    <Box>                                    
                                        <IconButton color="primary" onClick={handleOpenClothesCartDrawer} sx={{
                                            margin: '0px 0 0px 380px'
                                            }}>        
                                            <Badge color="error" badgeContent={localData === null ? 0 : localData.length} > {/*localData.length */}
                                                <ShoppingCartIcon color="warning" sx={{
                                                    margin: '5px 0 0 0px'
                                                }}/>
                                            </Badge>
                                        </IconButton>                                   
                                    </Box>  
                                </Box>
                               
                        <Typography sx={{
                                    margin: '0 0 6px 0 '
                                }}>
                                    {data.des}
                        </Typography>

                        <Rating value={4} />
                        
                        <Box sx={{
                                    display: 'flex'
                                }}>

                            <Typography>{data.price}</Typography>
                        </Box>
                        
                            <Box sx={{
                                    display: 'flex'
                                }}>
                                  <Typography sx={{
                                        margin: '50px 0 6px 50px'
                                     }} variant="h6">Size</Typography>
                                    
                                <FormControl component="fieldset" sx={{
                                        margin: '80px 0 0 6px',
                                    }}>

                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                        <FormControlLabel value="S" control={<Radio />} label="S" />
                                        <FormControlLabel value="M" control={<Radio />} label="M" />
                                        <FormControlLabel value="L" control={<Radio />} label="L" />
                                    </RadioGroup>
                                </FormControl>       
                            </Box>

                            <Box sx={{                                   
                                    display: 'flex'
                                     }}>

                                    <Typography sx={{
                                        margin: '5px 0 6px 50px'
                                    }} variant="h6">color</Typography>
                                    
                                <FormControl component="fieldset" sx={{
                                        margin: '40px 0 0 0',
                                    }}>

                                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                            <FormControlLabel value="White" control={<Radio />} label="White" />
                                            <FormControlLabel value="Black" control={<Radio />} label="Black" />
                                            <FormControlLabel value="Brown" control={<Radio />} label="Brown" />
                                        </RadioGroup>
                                </FormControl>       
                            </Box>
                    <Typography sx={{
                                        margin: '5px 0 6px 50px'
                                    }} variant="h6">Quantity</Typography>
                    <ButtonGroup sx={{
                                    display: 'flex',
                                    margin: '20px 0 0 100px'  
                                }}>
                                      <Button onClick={handleAddClick}><AddIcon/></Button>
                                      <Button>{data.amount !== undefined ? data.amount : amount }</Button>
                                      <Button onClick={handleRemoveClick}><RemoveIcon/>
                                        </Button>
                                </ButtonGroup> 
                                <Typography sx={{
                                        margin: '60px 0 0 50px',
                                    }} variant="h4" >{`$${data.price1}`}</Typography>
                    </Box>
                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    margin: '0 0 0 850px'
                                }}>
                                    <Button variant="outlined" sx={{
                                         '&.MuiButton-outlined': theme => ({
                                            color: theme.palette.warning.dark,
                                            borderColor: theme.palette.warning.light,
                                            margin: '1px 5px 5px 5px'
                                        })
                                    }} startIcon={<AddShoppingCartIcon/>}
                                       onClick = {handleAddToCard}
                                         >Add To Cart</Button>
                                    <Button variant="contained" sx={{
                                         '&.MuiButton-contained': theme => ({
                                            color: theme.palette.warning.dark,
                                            bgcolor: theme.palette.warning.light, 
                                            margin: '1px 4px 4px 4px'
                                        })
                                    }} startIcon={<LocalMallIcon/>}>Buy Now</Button>
                                </Box>        
                            </Box>
                        </Box>
                    </StyledPaper>
                </Box>
                    <ClothesCartDrawer
                        open={openClothesDrawer}
                        setOpen={setOpenClothesDrawer}
                    />
        </React.Fragment>
        </ThemeProvider></div>
    )
}

export default ProductDetail1;
