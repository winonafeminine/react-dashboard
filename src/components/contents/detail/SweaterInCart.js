import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

// icons
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { IconButton } from '@mui/material'

function SweaterInCart() {
    const [clicked, setClicked] = React.useState(false);
    const sweaterCartKey = 'sweaterCartKey';
    const sweaterCartStr = localStorage.getItem(sweaterCartKey);
    let sweaterCart = JSON.parse(sweaterCartStr);

    React.useEffect(() => {
        const sweaterCartStr = localStorage.getItem(sweaterCartKey);
        sweaterCart = JSON.parse(sweaterCartStr);
    },[clicked]);

    const handleAddAmount = (value) =>{
        sweaterCart.map((val) => {
            if(val.title === value.title)
            {
                val.amount += 1;
            }
            return val;
        });
        const cart = JSON.stringify(sweaterCart);
        localStorage.setItem(sweaterCartKey, cart);
        setClicked(c => !c); //setClicked(!clicked);
    }

    const handleRemoveAmount = (value) => {
        sweaterCart.map((val) => {
            if(val.amount === 0)
             {
                // break
                return;
            }
            if(val.title === value.title)
            {   

                val.amount -= 1;
            }
            return val;
        });
        const cart = JSON.stringify(sweaterCart);
        localStorage.setItem(sweaterCartKey, cart);
        setClicked(c => !c) //setClicked(!clicked);
    }

    const handleRemoveSweaterInCart = (index) => {
        sweaterCart.splice(index, 1);
        const cart = JSON.stringify(sweaterCart);
        localStorage.setItem(sweaterCartKey, cart);
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
              Sweater In Cart
            </Typography>
            <Divider light={true} sx={{
                margin: '0 0 12px 0'
            }}/>
            {sweaterCart.map((value, ind) => (
                <Box sx={{
                    margin: '6px 0',
                    '& .sweaterInCartImg' :{
                        width: '90px',
                        height: '90px'
                    }
                }}key={value.title}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <ButtonGroup orientation="vertical" sx={{
                            margin: '0 12px 0 0'
                        }}>
                            <Button onClick={() => handleAddAmount(value)}><AddIcon/></Button>
                            <Button>{value.amount}</Button>
                            <Button onClick={() => handleRemoveAmount(value)}><RemoveIcon/></Button>
                        </ButtonGroup>
                         <img className="sweaterInCartImg" src={value.src} alt=""/>
                         <Typography sx={{
                             margin: '0 0 0 6px'
                         }}>{value.title}</Typography>

                         <IconButton onClick={() => handleRemoveSweaterInCart(ind)}><DeleteOutlineIcon/></IconButton>

                    </Box>
                   
                </Box>
            ))}
            
      </Box>
    )
}

export default SweaterInCart
