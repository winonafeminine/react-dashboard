import React from 'react'
import './Detail.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


function Header1() {
  const [value, setValue] = React.useState("");
  function Leave (){
        // console.log ("Hello")
        setValue("Hello");
    }
    return (
        <div>       
          <div>{value}</div>
        <List>
          <ListItem disablePadding>
            <ListItemButton onMouseLeave = {Leave}>
            <ListItemIcon>
                <AddShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary="วิโนน่า คอสเมติกส์" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="winonaofficial_th" />
            </ListItemButton>
          </ListItem>
        </List>
        </div>
 
    );
}

export default Header1;