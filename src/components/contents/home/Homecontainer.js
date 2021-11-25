import React from "react"
import './style/Homecontainer.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Homecontainer() {
    const [value, setValue] = React.useState("Controlled");

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (  
        <div className="hero">
           <div className="hero layout">
                <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" }
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                    id="outlined-textarea"
                    label="Username"
                    placeholder="Enter Username"
                    multiline
                    />
                    <TextField
                    id="outlined-textarea"
                    label="Password"
                    placeholder="Enter Password"
                    multiline
                    />
                    <TextField
                    id="outlined-textarea"
                    label="Comment"
                    multiline
                    rows={4}
                    defaultValue="Write a comment here"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                    id="outlined-textarea"
                    label="Output Comment"
                    multiline
                    rows={4}
                    value={value}
                    />
                </div>
                </Box>
            </div>
        </div>
    )
}