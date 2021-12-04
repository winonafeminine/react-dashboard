import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

// icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const StyledPaper = styled(Paper)
    (({theme}) => ({
        borderRadius: '12px',
        padding: '12px',
        width: '70%',
        background:'Gray',
       
    }));


function Dtdetail() {
    const [localData, setLocalData] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);

    const kpopCartKey = 'kpopCartKey' ;

    const [amount, setAmount] = React.useState(0);

    const kpopdetail = 'kpopdetail';
    // convert to object
    const strdata = localStorage.getItem(kpopdetail);
    // raw data
    const data = JSON.parse(strdata);
    // console.log(data);

    // set ข้อมูลเริ่มต้น
    React.useEffect(() => {
            const kpopCartStr = localStorage.getItem(kpopCartKey);
            const kpopCart = JSON.parse(kpopCartStr) ;
            // ! = เช็คเงื่อนไขถ้าไม่มีข้อมูล จะเข้าเงื่อนไข
            if(!localData.includes(data))
            {
                if(kpopCart !== null){
                   setLocalData(kpopCart); 
                }
                // console.log(localData);
                return
            }   
        }, [clicked]);

    const [kpopImg, setkpopImg] = React.useState(data.src)
    const handlekpopImgClick = (e,src) => {
        setkpopImg(src)
    }
    const handleAddClick =() => {
        setAmount(amount+1);
    }
    // รันจากบนลงล่าง พอเจอ amount = 0 จะรีเทิร์นออกจากฟังชัน
    const handleRemoveClick = (e) => {
        if(amount === 0)
        {
            return;
        }
        setAmount(amount-1);
    }

    const handleAddToCart = (e) => {

        setClicked(!clicked);
        let kpopCart = JSON.parse(localStorage.getItem(kpopCartKey)) ;
        let kpopCartStr = JSON.stringify(kpopCart);
        if(kpopCart === null)
        {
            kpopCart = [];
            kpopCart.push(data);
            kpopCartStr = JSON.stringify(kpopCart);
            localStorage.setItem(kpopCartKey, kpopCartStr);
            return;
        }
           let exist = false ;
            kpopCart.map((value) => {
                if(value.title === data.title)
                {
                    exist = true;
                }
                return value;
            });

            if(exist){
                return;
            }
            // sweaterCart.push(data);
           
        
        kpopCart.push(data);
        kpopCartStr = JSON.stringify(kpopCart);
        localStorage.setItem(kpopCartKey, kpopCartStr);
    }
    // console.log(sweaterImg)
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
                    position: 'relative',
                    height: '83vh'  
                }
            }}>
               
                {/* wrapper */}
                <Box sx={{
                '&.MuiBox-root': {
                    // width: '100%'
                    width: '90%',
                    backgroundColor: 'Gray'
                }
            }}>
                <Badge color ="primary" badgeContent={localData !==undefined ? localData.length : 0} sx={{
                    position: 'absolute',
                    Button: 1 ,
                    right: 1 ,
                }}>
                <IconButton color="primary" >
                    <ShoppingCartIcon
                        sx={{
                            width: '35px',
                            height: '35px'
                        }}
                    />
                </IconButton>
                </Badge>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box sx={{
                        '&.MuiBox-root': theme => ({
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& img.kpop' : {
                                width: '500px',
                                height: '400PX',
                                borderRadius: '6px',
                                backgroundColor: '#ffffff'
                            }
                        })
                    }}>
                        <img  className="kpop" src={kpopImg} alt=""/>
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
                                        '& .gallary': {
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
                                        data.gallary.map(value => (
                                            <Button>
                                            <img className="gallary" src={value} alt=""
                                                onClick={(e) =>handlekpopImgClick(e,value)}
                                            />
                                            </Button>
                                        ))
                                    }
                                    
                                </Box>
                            </Box>
                            <Box sx={{
                                '&.MuiBox-root': {
                                    margin: '0 0 0 20px'
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex'
                                }}>
                                    <Typography sx={{
                                        margin: '0 0 6px 0'
                                    }} variant="h5" color="black"><b>{data.title}</b></Typography>
                                    <Chip color="primary" sx={{
                                        margin: '0 0 0 2px',
                                    }} label="New" />
                                </Box>
                                <Typography color="BLACK" sx={{
                                    margin: '0 0 6px 0  '
                                }}>
                                    {data.des}
                                </Typography>
                        
                                <ButtonGroup sx={{
                                    margin: '6px 0 0 0'
                                }}>
                                    <Button color="inherit" onClick={handleAddClick}><AddIcon/></Button>
                                    <Button color="inherit">{amount}</Button>
                                    <Button color="inherit" onClick={handleRemoveClick}><RemoveIcon/></Button>
                                </ButtonGroup>
                                <Box sx={{
                                    display: 'flex',
                                    margin: '12px 0 0 0'
                                }}>
                                    <Button color="inherit" variant="outlined" startIcon={<AddShoppingCartIcon/>}
                                        onClick={handleAddToCart}
                                    >Add To Cart</Button>
                                    <Button color="primary" sx={{
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


export default Dtdetail
