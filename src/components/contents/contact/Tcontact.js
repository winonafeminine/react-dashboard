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
function Tconcact (){
    return (
        <div> 
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                    <Link
                        component="button"
                        variant="caption"
                        onClick={() => {
                        window.open("https://web.facebook.com/WinonaCosmetic/?_rdc=1&_rdr")
                        }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                <ListItemIcon>
                                    <FacebookIcon/>
                                </ListItemIcon>
                                <ListItemText primary="วิโนน่า คอสเมติกส์" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link
                        component="button"
                        variant="caption"
                        onClick={() => {
                        window.open("https://www.instagram.com/winonaofficial_th/")
                        }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                <ListItemIcon>
                                    <InstagramIcon/>
                                </ListItemIcon>
                                <ListItemText primary="winonaofficial_th" />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                        <Link
                        component="button"
                        variant="caption"
                        onClick={() => {
                        window.open("https://www.winonafeminine.com/en")
                        }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                <ListItemIcon>
                                    <LanguageIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Winona Feminine (official) " />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>
                </nav>
                <Divider />
            </Box>

        </div>
    )
}
export default Tconcact;
