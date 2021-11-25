import React from "react"
import './style/Homeheader.css'
import Layout2Image from "./1.jpg"
import logo from "./2.png"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Homeheader() {
    const [value, setValue] = React.useState(0);
    return (  
        <div className="hero" align="center">
            <div className="logo">
                <a href="#layout1"><img src={logo} alt="Not Found Image"/></a>
            </div>
            <div className="layout1">
                <p>Winona Feminine (official)</p>
              
                <p id="text">Lorem ipsum dolor sit amet.
                    Autem minima optio adipisci illum!
                    Vero reiciendis animi beatae quod!
                    Officiis ratione tempora temporibus quo.
                    Facilis quia tenetur eaque mollitia.
                    Molestiae ut consequuntur qui sunt.
                    Magni facilis eaque id quia?</p>
                <div id="react-store" align="right">
                    <Box sx={{ width: 300, padding: 0 }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {setValue(newValue);}}>
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                    </Box>
                </div>
            </div>
            <div className="layout2">
                <img src={Layout2Image} alt="Not Found Image"/>
            </div>
        </div>
    )
}