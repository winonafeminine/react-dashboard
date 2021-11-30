import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box'
// theme
import { itTheme } from './../../UIs/theme/itTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline'

export default function CatDialog(props) {
    const {value, open, setOpen} = props;
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={itTheme}>
            <CssBaseline />
            <Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
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
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
        
    );
}

CatDialog.propTypes = {
    value: PropTypes.object, 
    open: PropTypes.bool, 
    setOpen: PropTypes.func
}