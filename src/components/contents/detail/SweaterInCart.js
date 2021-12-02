import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

// icons
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function SweaterInCart() {
    const sweaterCartKey = 'sweaterCartKey';
    const sweaterCartStr = localStorage.getItem(sweaterCartKey);
    const sweaterCart = JSON.parse(sweaterCartStr);
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
            {sweaterCart.map((value) => (
                <Box sx={{
                    margin: '6px 0',
                    '& .sweaterInCartImg' :{
                        width: '90px',
                        height: '90px'
                    }
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <ButtonGroup orientation="vertical" sx={{
                            margin: '0 12px 0 0'
                        }}>
                            <button><AddIcon/></button>
                            <button>{value.amount}</button>
                            <button><RemoveIcon/></button>
                        </ButtonGroup>
                         <img className="sweaterInCartImg" src={value.src} alt=""/>
                         <Typography sx={{
                             margin: '0 0 0 6px'
                         }}>{value.title}</Typography>

                    </Box>
                   
                </Box>
            ))}
            
      </Box>
    )
}

export default SweaterInCart
