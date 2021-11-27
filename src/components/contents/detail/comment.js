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
            id="outlined-textarea"
            label="Full Name"
            multiline
            />
                
            <TextField
            style = {wtext}
            id="outlined-textarea"
            label="Comment"
            multiline
            rows={5}
             />
             <br />
            <div className = "btn"><Button variant= "contained">SEND</Button> </div>
        
        </div>
            
    </Box>

  );
}
