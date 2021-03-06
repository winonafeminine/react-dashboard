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

function KpopInCart() {
    const [clicked, setClicked] = React.useState(false);
    const KpopCartKey = 'KpopCartKey';
    const KpopCartStr = localStorage.getItem(KpopCartKey);
    let   KpopCart = JSON.parse(KpopCartStr);

    React.useEffect(() => {
        const KpopCartStr = localStorage.getItem(KpopCartKey);
        KpopCart = JSON.parse(KpopCartStr);
    },[clicked]);

    const handleAddAmount = (value) =>{
        KpopCart.map((val) => {
            if(val.title === value.title)
            {
                val.amount += 1;
            }
            return val;
        });
        const cart = JSON.stringify(KpopCart);
        localStorage.setItem(KpopCartKey, cart);
        setClicked(c => !c); //setClicked(!clicked);
    }

    const handleRemoveAmount = (value) => {
        KpopCart.map((val) => {
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
        const cart = JSON.stringify(KpopCart);
        localStorage.setItem(KpopCartKey, cart);
        setClicked(c => !c) //setClicked(!clicked);
    }

    const handleRemoveKpopInCart = (index) => {
        KpopCart.splice(index, 1);
        const cart = JSON.stringify(KpopCart);
        localStorage.setItem(KpopCartKey, cart);
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
              Kpop In Cart
            </Typography>
            <Divider light={true} sx={{
                margin: '0 0 12px 0'
            }}/>
            {KpopCart.map((value, ind) => (
                <Box sx={{
                    margin: '6px 0',
                    '& .KpopInCartImg' :{
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
                         <img className="KpopInCartImg" src={value.src} alt=""/>
                         <Typography sx={{
                             margin: '0 0 0 6px'
                         }}>{value.title}</Typography>

                         <IconButton onClick={() => handleRemoveKpopInCart(ind)}><DeleteOutlineIcon/></IconButton>

                    </Box>
                   
                </Box>
            ))}
            
      </Box>
    )
}

export default KpopInCart
