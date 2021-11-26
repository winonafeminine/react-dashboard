import React from 'react'
import './Detail.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import One from './img/5.jpg'

function Header1() {
  const [value, setValue] = React.useState("");
  function Leave (){
        // console.log ("Hello")
        setValue("จำหน่ายสินค้าคุณภาพ");
    }
  function Leave1 (){
      // console.log ("Hello")
      setValue("บริหารจัดการ");
  }
    return (
        <div className="App-header1">       
          <div>{value}</div>
        <List>
          <ListItem disablePadding>
            <ListItemButton onMouseEnter = {Leave}>
            <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="ธุรกิจจากจุดซ่อนเร้นสู่เงินล้าน" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onMouseEnter = {Leave1}>
              <ListItemIcon>
              <PermIdentityIcon/>
              </ListItemIcon>
              <ListItemText primary="ผู้บิรหาร" />
            </ListItemButton>
          </ListItem>
        </List>
        <div><img src={One} alt="" align="center" width ="800" height = "500"/></div>
        </div>
 
    );
}

export default Header1;