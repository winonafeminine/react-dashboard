import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {value.des}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} autoFocus>
              ปิด
             </Button>

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
