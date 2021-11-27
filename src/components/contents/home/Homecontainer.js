import React from "react"
// import './style/Homecontainer.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

export default function Homecontainer() {
    const [value, setValue] = React.useState("Controlled");

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (  
            <Grid container spacing={2} sx={{
                margin: '12px 0 50px 0'
            }}>
                <Grid item lg={6}>
                    <TextField
                    fullWidth
                    id="outlined-textarea"
                    label="Username"
                    placeholder="Enter Username"
                    multiline
                    />
                </Grid>
                <Grid item lg={6}>
                    <TextField
                    fullWidth
                    id="outlined-textarea"
                    label="Password"
                    placeholder="Enter Password"
                    multiline
                    />
                </Grid>
                <Grid item lg={6}>
                    <TextField
                    fullWidth
                    id="outlined-textarea"
                    label="Comment"
                    multiline
                    rows={4}
                    defaultValue="Write a comment here"
                    onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={6}>
                    <TextField
                    fullWidth
                    id="outlined-textarea"
                    label="Output Comment"
                    multiline
                    rows={4}
                    value={value}
                    />
                </Grid>
            </Grid>
    )
}