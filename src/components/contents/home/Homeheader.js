import React from "react"
// import './style/Homeheader.css'
import Layout2Image from "./1.jpg"
import logo from "./2.png"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

export default function Homeheader() {
    const [value, setValue] = React.useState(0);
    return (  
        <Box className="hero" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div className="logo">
                <a href="#layout1"><img src={logo} alt="Not Found Image"/></a>
            </div>
            <Typography variant="h4" sx={{
                '&.MuiTypography-root': theme => ({
                    fontWeight: theme.typography.fontWeightBold
                })
            }}>
                Winona Feminine (official)
            </Typography>
            
            <Box sx={{
                '&.MuiBox-root': {
                    width: '30%'
                }
            }}>
                <p align="center" id="text">Lorem ipsum dolor sit amet.
                    Autem minima optio adipisci illum!
                    Vero reiciendis animi beatae quod!
                    Officiis ratione tempora temporibus quo.
                    Facilis quia tenetur eaque mollitia.
                    Molestiae ut consequuntur qui sunt.
                    Magni facilis eaque id quia?</p>
            </Box>
            <Box sx={{
                width: '100%'
            }}>
                <BottomNavigation
                    variant="fullWidth"
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {setValue(newValue);}}>
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Box>
            <div className="layout2" style={{width: '100%'}}>
                <img width="100%" src={Layout2Image} alt="Not Found Image"/>
            </div>
        </Box>
    )
}