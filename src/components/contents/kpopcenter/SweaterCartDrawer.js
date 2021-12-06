import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import KpopInCart from './kpopincart';

export default function KpopCartDrawer(props) {
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
                <KpopInCart/>
            </Drawer>
        </React.Fragment>
    );
    }
    KpopCartDrawer.propTypes = {
        open: PropTypes.bool,
        setOpen: PropTypes.func
    }
