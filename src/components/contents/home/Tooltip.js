import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { Button, Container, Fab, Modal, TextField, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { loadCSS } from 'fg-loadcss';

const breakpoint = {
    width: '100vw',
    height: '100vh'
  }

const useStyles = makeStyles((theme) => ({
    fab:{
        position: "fixed",
        bottom: '30px',
        right: '30px',
        color: "white",
        fontSize: "2.5rem",
        backgroundColor: '#2979ff',
        "& i:hover":{
            color: "#2979ff"
        }
    },
    container: {
        width: '650px',
        height: '600px',
        backgroundColor: "white",
        position: "absolute",
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        margin: "auto",
        borderRadius: '20px',
        maxWidth: '100vw',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        padding: "10px 20px 10px 20px",
        width: '100%'
    },
    item: {
        marginBottom: "20px",
        width: '100%',
        fontSize: '3rem',
        '& Button':{
            color: 'red'
        }
    },
    button: {
        position: "fixed",
        bottom: '8px',
        fontSize: "3rem",
        color: "red",
        width: '40vw',
    },
}));

export default function Tooltips() {
    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
          // Inject before JSS
          document.querySelector('#font-awesome-css') || document.head.firstChild,
        );
        return () => {
          node.parentNode.removeChild(node);
        };
    }, []);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  return (
        <Box>
            <Tooltip 
            title="Message" 
            aria-label="add" 
            onClick={() => setOpen(true)}>
                <Fab className={classes.fab}>
                    <i class="fab fa-facebook-messenger"></i>
                </Fab>    
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form breakpoints={breakpoint}>
                        <Grid className={classes.form} >
                            <Grid className={classes.item}>
                                <TextField 
                                id="standard-basic" 
                                label="Product Name" 
                                variant="standard" 
                                title="Title" 
                                size="small" 
                                style={{width:"100%"}} />                    
                            </Grid>
                            <Grid className={classes.item}>
                               <TextField 
                               id="outlined-basic" 
                               label="Description" 
                               multiline 
                               rows={6} 
                               variant="outlined" 
                               title="Title" 
                               size="small" 
                               style={{width:"100%"}} />                    
                            </Grid>
                            <Grid className={classes.item}>
                                <Button className={classes.item} onClick={() => setOpen(false)}>
                                    <HighlightOffIcon fontSize="4rem" />
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Modal>
        </Box>
    
  );
}
