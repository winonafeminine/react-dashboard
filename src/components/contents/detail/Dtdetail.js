import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import styled from '@mui/material/styles/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import SweaterCartDrawer from './SweaterCartDrawer';

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
        backgroundColor: '#4caf50'
    }));

const Theme = React.createContext({
    dark: 'pink' ,
    light: 'blue'
})

function Dtdetail() {
    const contextValue ={
        dark: 'green' ,
        light: 'pink'
    }
    const [state, setState] = React.useState("green") ;
    // step ที่ 2
    const context = React.useContext(Theme);

    const changeTheme = () => {
        if(context.dark === 'green')
        {
            setState("orange")
        }else
        {
            setState("green")
        }
    }

    React.useEffect(() => {
        context.dark = state ;
    },[state]);

    const [localData, setLocalData] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [openSweaterDrawer, setOpenSweaterDrawer] = React.useState(false);

    const sweaterCartKey = 'sweaterCartKey' ;

    const [amount, setAmount] = React.useState(0);

    const dtdetail = 'dtdetail';
    // convert to object
    const strdata = localStorage.getItem(dtdetail);
    // raw data
    let data = JSON.parse(strdata);
    // console.log(data);

    // set ข้อมูลเริ่มต้น
    React.useEffect(() => {
            const sweaterCartStr = localStorage.getItem(sweaterCartKey);
            const sweaterCart = JSON.parse(sweaterCartStr) ;
            // ! = เช็คเงื่อนไขถ้าไม่มีข้อมูล จะเข้าเงื่อนไข
            if(!localData.includes(data))
            {
                if(sweaterCart !== null){
                   setLocalData(sweaterCart); 
                }
                // console.log(localData);
                return
            }   
        }, [clicked]);

    const [sweaterImg, setSweaterImg] = React.useState(data.src)
    const handleSweaterImgClick = (e,src) => {
        setSweaterImg(src)
    }
    const handleAddClick =(index) => {
        const sweaterCartStr = localStorage.getItem(sweaterCartKey);
        setAmount(amount + 1);
        if(sweaterCartStr === null)
            {
                return;
            }

            let sweaterCart = JSON.parse(sweaterCartStr);
        sweaterCart.map((value, ind) => {
            if(value.title === data.title)
            {
                value['amount'] = amount + 1 ;
            }
            return value ;
        });
        sweaterCart = JSON.stringify(sweaterCart) ;
        localStorage.setItem(sweaterCartKey, sweaterCart);
        
    }
    // รันจากบนลงล่าง พอเจอ amount = 0 จะรีเทิร์นออกจากฟังชัน
    const handleRemoveClick = (index) => {
        const sweaterCartStr = localStorage.getItem(sweaterCartKey);
        if(amount === 0)
        {
            return;
        }
        setAmount(amount-1);
        if(sweaterCartKey === null)
        {
            return;
        }
        let sweaterCart = JSON.parse(sweaterCartStr);
        sweaterCart.map((value, ind) => {
            if(value.title === data.title)
            {
                value['amount'] = amount - 1 ;
            }
            return value;
        });
        sweaterCart = JSON.stringify(sweaterCart);
        localStorage.setItem(sweaterCartKey, sweaterCart);
    }

    const handleAddToCart = (e) => {
        setClicked(!clicked);
        let sweaterCart = JSON.parse(localStorage.getItem(sweaterCartKey)) ;
        let sweaterCartStr = JSON.stringify(sweaterCart);
        if(sweaterCart === null)
        {
            sweaterCart = [];
            data['amount'] = amount;
            sweaterCart.push(data);
            sweaterCartStr = JSON.stringify(sweaterCart);
            localStorage.setItem(sweaterCartKey, sweaterCartStr);
            return;
        }
           let exist = false ;
            sweaterCart.map((value) => {
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
           
        
        sweaterCart.push(data);
        sweaterCartStr = JSON.stringify(sweaterCart);
        localStorage.setItem(sweaterCartKey, sweaterCartStr);
    }
    // เปิดปิด sweaterCartDrawer
    const handleOpenSweaterDrawer = () => {
        setOpenSweaterDrawer(true);
    }
    // console.log(sweaterImg)
    return (
        <Theme.Provider value={contextValue}>
        
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
                    backgroundColor: '#4caf50'
                }
            }}>
                <Badge badgeContent={localData !==undefined ? localData.length : 0} sx={{
                    position: 'absolute',
                    Button: 1 ,
                    right: 1 ,
                }}>
                <IconButton style={{background: context.dark}}  onClick={handleOpenSweaterDrawer}>
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
                            '& img.sweater' : {
                                width: '500px',
                                height: '600px',
                                borderRadius: '6px',
                                // backgroundColor: '#4caf50'
                            }
                        })
                    }}>
                        <img  className="sweater" src={sweaterImg} alt=""/>
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
                                            margin: '0 3px',
                                            cursor:'pointer',
                                        }
                                    }
                                }}>
                                    {
                                        data.gallery.map(value => (
                                            <Button key={value}>
                                            <img className="gallery" src={value} alt=""
                                                onClick={(e) => handleSweaterImgClick(e,value)}
                                            />
                                            </Button>
                                        ))
                                    }
                                    
                                </Box>
                            </Box>
                            <Box  sx={{
                                '&.MuiBox-root': {
                                    margin: '0 0 0 12px'
                                }
                            }}>
                                <Box sx={{
                                    display: 'flex'
                                }}>
                                    <Typography sx={{
                                        margin: '0 0 6px 0'
                                    }} variant="h5"><b>{data.title}</b></Typography>
                                    <Chip onClick={changeTheme} style={{background: context.dark}} sx={{
                                        margin: '0 0 0 2px',
                                    }} label="New" />
                                </Box>
                                <Typography color="green" sx={{
                                    margin: '0 0 6px 0  '
                                }}>
                                    {data.des}
                                </Typography>
                                <Rating value={5} />
                                <Box sx={{
                                    display: 'flex'
                                }}>
                                    <Typography color="white">{`฿${data.price}`}</Typography>
                                    <Typography sx={{
                                        margin: '0 0 0 6px',
                                        textDecoration: 'line-through'
                                    }}>{ `฿${data.salePrice}`}</Typography>

                                </Box>
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
                                    <Button style={{background: context.dark}} sx={{
                                        margin: '0 0 0 6px'
                                    }} variant="contained" startIcon={<LocalMallIcon/>}>Buy Now</Button>
                                </Box>
                            </Box>
                        </Box>
                        </Box>
                    </Box>
                </StyledPaper>
                </Box>
                <SweaterCartDrawer
                     open={openSweaterDrawer}
                     setOpen={setOpenSweaterDrawer}   
                />
        </React.Fragment>
        </Theme.Provider>
    )
}


export default Dtdetail
