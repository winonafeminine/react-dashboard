import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

export default function ItDialog(props) {
    const {value, open, setOpen} = props;
    // const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '&.MuiDialog-root': theme => ({
                        border: '17px',
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.7)',
                        
                        
                    }),
                    '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': theme => ({
                        borderRadius: '17px',
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(40px)',
                    }),
                    '& img':{
                        borderRadius: '43px',
                        padding: '17px'
                    }
            }}
            >
                <DialogTitle id="alert-dialog-title">
                {value.name}
                </DialogTitle>
                <img src={value.src} alt="" />
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {value.des}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Leave
                </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

ItDialog.propTypes = {
    value: PropTypes.object, 
    open: PropTypes.bool, 
    setOpen: PropTypes.func
}