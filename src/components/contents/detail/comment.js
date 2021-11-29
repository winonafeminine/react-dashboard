import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import textstyle from './Detail.css';
import Button from '@mui/material/Button';


export default function BasicTextFields() {
    const wtext ={
        width : "35vw",
    }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '17vw'  },
      
    }}
    noValidate
    autoComplete="off"
    style = {textstyle}
    >
        <div className = "TextField">
            <TextField 
            id="filled-basic"
            label="Full Name"
            color="success"
            multiline
            />
          
            <TextField
            style = {wtext}
            id="outlined-textarea"
            label="Comment"
            color="success"
            multiline
            rows={4}
             />
             <br />
            <div className = "btn"><Button variant= "contained"  color="success" >SEND</Button> </div>
        
        </div>
            
    </Box>

  );
}
