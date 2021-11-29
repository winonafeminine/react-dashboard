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
        <Box sx={{
            '&.MuiBox-root': theme =>({
                alignItems: "center",
                width: '100%',
                margin: '30px 0 30px 0'
            })
        }}>
            <Grid container spacing={2} sx={{
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
        </Box>
            
    )
}