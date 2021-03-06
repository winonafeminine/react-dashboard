import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import KpopCartDrawer from './kpopCartDrawer';

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
        backgroundColor: 'Gray',
    }));


function Dtdetail() {
    const [localData, setLocalData] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [openKpopDrawer, setOpenKpopDrawer] = React.useState(false);

    const KpopCartKey = 'KpopCartKey' ;

    const [amount, setAmount] = React.useState(0);

    const kpopdetail = 'kpopdetail';
    // convert to object
    const strdata = localStorage.getItem(kpopdetail);
    // raw data
     const data = JSON.parse(strdata);
    // console.log(data);

    // set ข้อมูลเริ่มต้น
    React.useEffect(() => {
            const KpopCartStr = localStorage.getItem(KpopCartKey);
            const KpopCart = JSON.parse(KpopCartStr) ;
            // ! = เช็คเงื่อนไขถ้าไม่มีข้อมูล จะเข้าเงื่อนไข
            if(!localData.includes(data))
            {
                if(KpopCart !== null){
                   setLocalData(KpopCart); 
                }
                // console.log(localData);
                return
            }   
        }, [clicked]);

    const [KpopImg, setKpopImg] = React.useState(data.src)
    const handleKpopImgClick = (e,src) => {
        setKpopImg(src)
    }
    const handleAddClick =(index) => {
        const KpopCartStr = localStorage.getItem(KpopCartKey);
        setAmount(amount + 1);
        if(KpopCartStr === null)
            {
                return;
            }

            let KpopCart = JSON.parse(KpopCartStr);
            KpopCart.map((value, ind) => {
            if(value.title === data.title)
            {
                value['amount'] = amount + 1 ;
            }
            return value ;
        });
        KpopCart = JSON.stringify(KpopCart) ;
        localStorage.setItem(KpopCartKey, KpopCart);
        
    }
    // รันจากบนลงล่าง พอเจอ amount = 0 จะรีเทิร์นออกจากฟังชัน
    const handleRemoveClick = (index) => {
        const KpopCartStr = localStorage.getItem(KpopCartKey);
        if(amount === 0)
        {
            return;
        }
        setAmount(amount-1);
        if(KpopCartKey === null)
        {
            return;
        }
        let KpopCart = JSON.parse(KpopCartStr);
        KpopCart.map((value, ind) => {
            if(value.title === data.title)
            {
                value['amount'] = amount - 1 ;
            }
            return value;
        });
        KpopCart = JSON.stringify(KpopCart);
        localStorage.setItem(KpopCartKey, KpopCart);
    }

    const handleAddToCart = (e) => {
        setClicked(!clicked);
        let KpopCart = JSON.parse(localStorage.getItem(KpopCartKey)) ;
        let KpopCartStr = JSON.stringify(KpopCart);
        if(KpopCart === null)
        {
            KpopCart = [];
            data['amount'] = amount;
            KpopCart.push(data);
            KpopCartStr = JSON.stringify(KpopCart);
            localStorage.setItem(KpopCartKey, KpopCartStr);
            return;
        }
           let exist = false ;
           KpopCart.map((value) => {
                if(value.title === data.title)
                {
                    exist = true;
                }
                return value;
            });

            if(exist){
                return;
            }
           
           
        
        KpopCart.push(data);
        KpopCartStr = JSON.stringify(KpopCart);
        localStorage.setItem(KpopCartKey, KpopCartStr);
    }
    // เปิดปิด sweaterCartDrawer
    const handleOpenKpopDrawer = () => {
        setOpenKpopDrawer(true);
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
                <IconButton color="primary" onClick={handleOpenKpopDrawer}>
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
                            '& img.Kpop' : {
                                width: '500px',
                                height: '300px',
                                borderRadius: '6px',
                                backgroundColor: 'Gray'
                            }
                        })
                    }}>
                        <img  className="Kpop" src={KpopImg} alt=""/>
                        <Box sx={{
                                    '&.MuiBox-root': {
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        margin: '6px 0 0 0',
                                        '& .gallary': {
                                            width: '75px',
                                            height: '75px',
                                            borderRadius: '12px',
                                            margin: '0 3px',
                                            cursor:'pointer',
                                        }
                                    }
                                }}>
                                    {
                                        data.gallary.map(value => (
                                            <Button key={value}>
                                            <img className="gallary" src={value} alt=""
                                                onClick={(e) => handleKpopImgClick(e,value)}
                                            />
                                            </Button>
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
                                        margin: '0 0 6px 0'
                                    }} variant="h5" color="black"><b>{data.title}</b></Typography>
                                    <Chip color="primary" sx={{
                                        margin: '0 0 0 2px',
                                    }} label="New" />
                                </Box>
                                <Typography color="black" sx={{
                                    margin: '0 0 6px 0  '
                                }}>
                                    {data.des}
                                </Typography>
                                
                                <ButtonGroup sx={{
                                    margin: '6px 0 0 0'
                                }}>
                                    <Button color="inherit" onClick={handleAddClick}><AddIcon/></Button>
                                    <Button color="inherit">{data.amount !== undefined ? data.amount : amount}</Button>
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
                <KpopCartDrawer
                     open={openKpopDrawer}
                     setOpen={setOpenKpopDrawer}   
                />
        </React.Fragment>
    )
}


export default Dtdetail
