import React from 'react'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import './Detail.css'

export default function Hcontact() {
  const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.success.main 
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.success.main
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.success.main
    },
  }));
  
     return (
      <div  className="header">
         <Root>
            <Typography sx = {{display:'flex', justifyContent : 'center'} } variant = "h3"> 
            Sweater GradeA
            </Typography>
        </Root>
      </div>
    )
} 
