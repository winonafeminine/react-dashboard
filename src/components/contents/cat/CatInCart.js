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

function CatInCart() {
    const [clicked, setClicked] = React.useState(false);
    const catCartKey = 'catCartKey';
    const catCartStr = localStorage.getItem(catCartKey);
    let catCart = JSON.parse(catCartStr);

    React.useEffect(() => {
        const catCartStr = localStorage.getItem(catCartKey);
        catCart = JSON.parse(catCartStr);
        // eslint-disable-next-line
    }, [clicked]);

    const handleAddAmount = (value) => {
        catCart.map((val) => {
            if(val.name === value.name)
            {
                val.amount += 1;
            }
            return val;
        });
        const cart = JSON.stringify(catCart);
        localStorage.setItem(catCartKey, cart);
        setClicked(c => !c) //setClicked(!clicked);

    }

    const handleRemovevCatInCart = (index)=> {
        catCart.splice(index, 1);
        const cart = JSON.stringify(catCart);
        localStorage.setItem(catCartKey, cart);
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
                Cats In Cart
            </Typography>
            <Divider light={true} sx={{
                margin: '0 0 12px 0'
            }}/>
            {catCart.map((value, ind) => (
                <Box sx={{
                    // padding: '12px',
                    margin: '6px 0',
                    '& .catInCartImg':{
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
                            <Button><RemoveIcon/></Button>
                        </ButtonGroup>
                        <img className="catInCartImg" src={value.src} alt=""/>
                        <Typography sx={{
                            margin: '0 0 0 6px'
                        }}>{value.name}</Typography>

                        <IconButton onClick={() => handleRemovevCatInCart(ind)}><DeleteOutlineIcon/></IconButton>
                    </Box>

                </Box>
            ))}
        </Box>
    )
}

export default CatInCart
