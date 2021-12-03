import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import SweaterInCart from './SweaterInCart';

export default function SweaterCartDrawer(props) {
    const{open, setOpen} = props;
   
    const handleClose = (e) => {
        setOpen(false)
    }

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
