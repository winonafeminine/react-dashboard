import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import { render } from '@testing-library/react';
function Tconcact ()
{ 
    const[state, setState] = React.useState(0);
        const handleClick = (e) => {
            setState(state+1);
        }
    return (
        <div> 
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {window.open("https://www.instagram.com/winonaofficial_th/")}} >
                             <ListItemIcon>
                                <FacebookIcon/>
                            </ListItemIcon>
                            <ListItemText  primary="วิโนน่า คอสเมติกส์" />
                            </ListItemButton>
                        </ListItem>
                       <ListItem disablePadding>
                            <ListItemButton  onClick={() => {window.open("https://www.instagram.com/winonaofficial_th/")}}>
                            <ListItemIcon>
                                <InstagramIcon/>
                            </ListItemIcon>
                            <ListItemText primary="winonaofficial_th" />
                            </ListItemButton>
                        </ListItem>
                        
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                <LanguageIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Winona Feminine (official) " />
                            </ListItemButton>
                        </ListItem>      
                    </List>
                </nav>
                <Divider />
            </Box>
            

        </div>
    )
}
export default Tconcact;
