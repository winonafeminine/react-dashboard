import React from 'react'
import './Detail.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Header() {
  const [value, setValue] = React.useState("");
  function Leave (){
        // console.log ("Hello")
        setValue("เเบรนด์สินค้ายอดนิยม");
    }
    function Leave1 (){
      // console.log ("Hello")
      setValue("สินค้าเเบรนด์ดัง");
  }
  function Leave2 (){
    // console.log ("Hello")
    setValue("เเบรนด์คุณภาพ");
}
    return (
        <div className="App-header1">       
        <List>
          <ListItem disablePadding>
            <ListItemButton onMouseEnter = {Leave}>
            <ListItemIcon>
                <AddShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary="เสื้อเเขนสั้น" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onMouseEnter = {Leave1}>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="กางเกงขายาว" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onMouseEnter = {Leave2}>
              <ListItemIcon>
                <LocalShippingIcon />
              </ListItemIcon>
              <ListItemText primary="รองเท้า" />
            </ListItemButton>
          </ListItem>
        </List>
        <div className="flex2">{value}</div>
        </div>
 
    );
}

export default Header;