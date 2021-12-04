import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import ClothesInCart from './ClothesInCart';

export default function CatCartDrawer(props) {
    const {open, setOpen} = props;

    const handleClose = (e) => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Drawer
                anchor="right"
                open={open}
                onClose={handleClose}
            >
            <ClothesInCart/>
            </Drawer>
        </React.Fragment>
    );
}

CatCartDrawer.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
}
