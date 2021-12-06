import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
export default function FoodDialog (props){
    const {value, open, setOpen} = props;
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {value.title}
            </DialogTitle>
            <img src={value.src} alt="" />
            <DialogActions>
            <Button onClick={handleClose}>CLOSE</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

FoodDialog.propTypes = {
    value: PropTypes.object, 
    open: PropTypes.bool, 
    setOpen: PropTypes.func
}
