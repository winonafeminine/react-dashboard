import React from 'react'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import './style.css'
export default function Hcontact() {
  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.light   
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.primary.dark
    },
  }));
  
     return (
      <div  >
         <Root>
            <Typography sx = {{display:'flex', justifyContent : 'center'} } variant = "h3"> 
            Kpop Center
            <ListItemIcon>
            <FaceRetouchingNaturalIcon/>
            <FaceRetouchingNaturalIcon/>
            <FaceRetouchingNaturalIcon/>
            </ListItemIcon>
            </Typography>
        </Root>
      </div>
    )
} 
