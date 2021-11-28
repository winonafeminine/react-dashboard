import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InstagramIcon from '@mui/icons-material/Instagram';
function Tconcact ()
{ 
    const[state, setState] = React.useState(0);
        const handleClick = (e) => {
            setState(state+1);
        }
    return (
        <div> 
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
                <nav aria-label="nested-list-subheader">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {window.open("https://www.instagram.com/blackpinkofficial/")}} >
                             <ListItemIcon>
                                <InstagramIcon/>
                            </ListItemIcon>
                            <ListItemText sx ={{color:'darksalmon'}}  primary="BLACKPINK" />
                            </ListItemButton>
                        </ListItem>
                       <ListItem disablePadding>
                            <ListItemButton  onClick={() => {window.open("https://www.instagram.com/bigbang_official/")}}>
                            <ListItemIcon>
                                <InstagramIcon/>
                            </ListItemIcon>
                            <ListItemText sx ={{color:'darksalmon'}} primary="BIGBANG" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {window.open("https://www.instagram.com/yg_treasure_official/")}}>
                            <ListItemIcon>
                                <InstagramIcon/>
                            </ListItemIcon>
                            <ListItemText sx ={{color:'darksalmon'}}  primary="TREASURE " />
                            </ListItemButton>
                        </ListItem>   
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {window.open("https://www.instagram.com/yg_treasure_official/")}}>
                            <ListItemIcon>
                                <InstagramIcon/>
                            </ListItemIcon>
                            <ListItemText sx ={{color:'darksalmon'}}  primary="iKon" />
                            </ListItemButton>
                        </ListItem>   
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {window.open("https://www.instagram.com/yg_treasure_official/")}}>
                            <ListItemIcon>
                                <InstagramIcon/>
                            </ListItemIcon>
                            <ListItemText sx ={{color:'darksalmon'}}  primary="WINNER " />
                            </ListItemButton>
                        </ListItem>   
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => {window.open("https://www.instagram.com/yg_treasure_official/")}}>
                            <ListItemIcon>
                                <InstagramIcon/>
                            </ListItemIcon>
                            <ListItemText sx ={{color:'darksalmon'}}  primary="BTS " />
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
