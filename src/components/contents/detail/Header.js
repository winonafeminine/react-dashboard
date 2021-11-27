import React from 'react'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import './Detail.css'

export default function Hcontact() {
  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.success.light   
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.success.light
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.success.light
    },
  }));
  
     return (
      <div  >
         <Root>
            <Typography sx = {{display:'flex', justifyContent : 'center'} } variant = "h3"> 
            Emotional Agility
            <ListItemIcon>
            </ListItemIcon>
            </Typography>
        </Root>
      </div>
    )
} 
