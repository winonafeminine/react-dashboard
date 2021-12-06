import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

// icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

function ITDrawer() {
    const [clicked, setClicked] = React.useState(false);
    const itCardkey = 'itCardkey'; 
    const itCartStr = localStorage.getItem(itCardkey);
    let itCart = JSON.parse(itCartStr);

    React.useEffect(() => {
        const itCartStr = localStorage.getItem(itCardkey);
        itCart = JSON.parse(itCartStr);
        // eslint-disable-next-line
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
            if(val.amount === 0)
             {
                // break
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

    const handleRemoveITInCart = (index)=> {
        itCart.splice(index, 1);
        const cart = JSON.stringify(itCart);
        localStorage.setItem(itCardkey, cart);
        setClicked(!clicked);
    }

    return (
        <Box sx={{
            '&.MuiBox-root': {
                margin: '20px 0 0 0',
                padding: '12px'
            }
        }}>
            <Typography sx={{
                margin: '0 0 12px 0'
            }}>
                Products In Cart
            </Typography>
            <Divider light={true} sx={{
                margin: '0 0 12px 0'
            }}/>
            {itCart.map((value, ind) => (
                <Box sx={{
                    // padding: '12px',
                    margin: '6px 0',
                    '& .ITInCartImg':{
                        width: '75px',
                        height: '75px'
                    }
                }} key={value.name}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <ButtonGroup orientation="vertical" sx={{
                            margin: '0 12px 0 0'
                        }}>
                            <Button onClick={() => handleAddAmount(value)}><AddIcon/></Button>
                            <Button>{value.amount}</Button>
                            <Button onClick={() => handleRemoveAmount(value)} ><RemoveIcon/></Button>
                        </ButtonGroup>
                        <img className="ITInCartImg" src={value.src} alt=""/>
                        <Typography sx={{
                            margin: '0 0 0 6px'
                        }}>{value.name}</Typography>

                        <IconButton onClick={() => handleRemoveITInCart(ind)}><DeleteOutlineIcon/></IconButton>
                    </Box>

                </Box>
            ))}
        </Box>
    )
}

export default ITDrawer
