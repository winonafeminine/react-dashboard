import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

    
const Theme = React.createContext({
    dark: 'pink' ,
    light: 'blue'
})

function DashBorBtn (props) {
    const [state, setState] = React.useState("purple") ;
    // step ที่ 2
    const context = React.useContext(Theme);

    const changeTheme = () => {
        if(context.dark === 'purple')
        {
            setState("orange")
        }else
        {
            setState("purple")
        }
    }

    React.useEffect(() => {
        context.dark = state ;
    },[state]);

    return (
        <>
            <button onClick={changeTheme} style={{background: context.dark}}>Mode</button>
        </>
    )
}

export default function FoodDialog (props){
    const {value, open, setOpen} = props;
    const handleClose = () => {
        setOpen(false);
    };
    const contextValue ={
        dark: 'green' ,
        light: 'pink'
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
        <Theme.Provider value={contextValue}>
            <DashBorBtn/>
        </Theme.Provider>
        </div>

    );
}

FoodDialog.propTypes = {
    value: PropTypes.object, 
    open: PropTypes.bool, 
    setOpen: PropTypes.func
}
