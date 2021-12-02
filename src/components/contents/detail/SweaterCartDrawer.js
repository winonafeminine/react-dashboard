import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PropTypes from 'prop-types';
import SweaterInCart from './SweaterInCart';

export default function SweaterCartDrawer(props) {
    const{open, setOpen} = props;
   
    const handleClose = (e) => {
        setOpen(false)
    }

    const list = () => (
        <Box
        role="presentation"
        >
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </Box>
    );

    return (
            <React.Fragment >
            <Drawer
                anchor= "right"
                open={open}
                onClose={handleClose}
            >
            <SweaterInCart/>
            </Drawer>
            </React.Fragment>
    );
    }
    SweaterCartDrawer.propTypes = {
        open: PropTypes.bool,
        setOpen: PropTypes.func
    }
