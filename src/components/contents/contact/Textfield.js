import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import textstyle from './style.css';
import Button from '@mui/material/Button';
import Facebook from  './img/facebook.png';

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
            id="outlined-textarea"
            label="Last Name "
            multiline
            /> <br />
            <TextField
            id="outlined-textarea"
            label="Email "
            multiline
            />
            <TextField
          
            id="outlined-textarea"
            label="Phone Number "
            multiline
            /> <br />
            <TextField
            id="outlined-number"
            label="Age"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            />
            <TextField
            id="outlined-number"
            label="Age"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            /><br />           
            <TextField
            style = {wtext}
            id="outlined-textarea"
            label="Message"
            multiline
            rows={5}
             />
             <br />
            <div className = "btn"><Button variant= "contained">SEND</Button> </div>
        
        </div>
            
    </Box>

  );
}
