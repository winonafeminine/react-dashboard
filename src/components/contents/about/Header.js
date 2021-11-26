import React from 'react'
import './Detail.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import One from './img/4.jpg'

function Header() {
  const [value, setValue] = React.useState("");
  function Leave (){
        // console.log ("Hello")
        setValue("Hellow");
    }
    return (
        <div className="App-header1">       
          <div>{value}</div>
        <List>
          <ListItem disablePadding>
            <ListItemButton onMouseEnter = {Leave}>
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
              <ListItemText primary="จำหน่ายสินค้า" />
            </ListItemButton>
          </ListItem>
        </List>
        <div className="flex"><img src={One} alt="" align="center"/></div>
        </div>
 
    );
}

export default Header;