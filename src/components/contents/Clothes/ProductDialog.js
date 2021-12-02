import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';


 function ProductDialog(props) {
    const {value, open, setOpen} = props;
    // const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();
   
    const handleClose = () => {
        setOpen(false);
    };

    const handleViewDetailClick = (value) => {
        const clotdetail = 'clotdetail';
        // convert to string
        const str_value = JSON.stringify(value);
        localStorage.setItem(clotdetail, str_value);
        navigate('/clot/detail')
    }

    return (
        <div>
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
           <Button variant="outlined" sx={{
                            '&.MuiButton-outlined': theme => ({
                                color: theme.palette.warning.dark,
                                borderColor: theme.palette.warning.light,
                            })
                        }}startIcon={<ShoppingCartTwoToneIcon/>} 
                        onClick={() => handleViewDetailClick(value)}
                        >shop</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

ProductDialog.propTypes = {
    value: PropTypes.object, 
    open: PropTypes.bool, 
    setOpen: PropTypes.func,
    onClick: PropTypes.func,
}
export default ProductDialog;