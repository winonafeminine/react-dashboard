import React from "react"
import ImageHeader from "./Images/ImageHeader.jpg"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function Homeheader() {
    return (  
        <Box className="hero" sx={{
            height: '30rem',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={9}>
                    <Box sx={{
                        alignItems: "center",
                        height: '479px',
                        boxShadow: 1,
                        borderRadius: '12px',
                        '& img.ImageHeader':{
                            width: '100%',
                            height: '100%',
                            borderRadius: '12px'
                        }
                    }}>
                        <img className="ImageHeader" src={ImageHeader} alt=""  />
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box sx={{
                        boxShadow: 1,
                        height: '100%',
                        borderRadius: '12px',
                    }}>
                        <Box sx={{
                            height: '43px',
                            backgroundColor: "#00bcd4",
                            borderRadius: '12px 12px 0 0',
                            padding: '17px 0 0 17px',
                            color: 'white'
                        }}>หมวดหมู่</Box>
                        <Box sx={{
                            height: '419px',
                            padding: '10px 0 0 17px',
                            borderRadius: '0 0 12px 12px', 
                        }}>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="Kategorie" defaultValue="" name="radio-buttons-group">
                                    <FormControlLabel value="msi" control={<Radio />} label="MSI" />
                                    <FormControlLabel value="acer" control={<Radio />} label="ACER" />
                                    <FormControlLabel value="hp" control={<Radio />} label="HP" />
                                    <FormControlLabel value="dell" control={<Radio />} label="DELL" />
                                    <FormControlLabel value="asus" control={<Radio />} label="ASUS" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Box>
                    
                </Grid>
            </Grid>
        </Box>
    )
}