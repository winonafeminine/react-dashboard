import React from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Modal  from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/system';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider'

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const breakpoint = {
    width: '50vw',
    height: '100vh'
  }

const fab = styled('div')((theme) => ({
    position: "fixed",
    bottom: '30px',
    right: '30px',
    color: "white",
    fontSize: "2.5rem",
    backgroundColor: '#2979ff',
    "& i:hover":{
        color: "#2979ff"
    }
}))
  const item = styled('div')({
    marginBottom: "20px",
    width: '100%',
    fontSize: '3rem',
    '& Button':{
        color: 'red'
    }
  });
  const button = styled('div')({
    bottom: '8px',
  });

export default function Carts() {
    
    const [open, setOpen ] = useState(false);
    return (
        <Box>
            <Box sx={{ '& > :not(style)': { m: 1 },
            position: 'fixed',
            bottom: '30px',
            right: '30px'
            }}>
                <Badge badgeContent={1} color="primary" onClick={() => setOpen(true)}>
                    <Fab color="primary" aria-label="add" sx={{
                    backgroundColor: '#00bcd4'
                }}>
                    <ShoppingCartIcon />
                </Fab>
            </Badge>
            </Box>
            <Modal open={open}>
                <Container sx={{
                    width: '30vw',
                    height: '97vh',
                    backgroundColor: "white",
                    position: "absolute",
                    margin: "auto",
                    top: '10px',
                    right: '20px',
                    borderRadius: '20px',
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    '& .css-4o7qqo-MuiContainer-root':{
                        padding: '24px'
                    }
                }}>
                    <form breakpoints={breakpoint}>
                        <Grid sx={{
                            
                        }}>
                            <Grid sx={{margin: '10px 0'}}>
                                <Box>
                                    Cart Item
                                </Box>
                            </Grid>
                            <Divider sx={{margin: '10px 0'}} />
                            <Box sx={{
                                display: 'flex',
                            }}>
                                <Grid sx={{width: '130px'}}>
                                    <Box>
                                        Prodauct
                                    </Box>
                                </Grid>
                                <Grid sx={{width: '100px'}}>
                                    <Box>
                                        Price
                                    </Box>
                                </Grid>
                                <Grid sx={{width: '100px'}}>
                                    <Box>
                                        Quantity
                                    </Box>
                                </Grid>
                                <Grid sx={{width: '100px'}}>
                                    <Box>
                                        Total
                                    </Box>
                                </Grid>
                            </Box>
                            <Grid className={item}>
                                <ButtonGroup sx={{
                                    //flexDirection: 'column',
                                    margin: '20px 0 0 0',
                                    borderRadius: '5px',
                                    '& Button.css-1rwt2y5-MuiButtonBase-root-MuiButton-root':{
                                        padding: '0px'
                                    }
                                }}>
                                    <Button>
                                        <AddIcon/>
                                    </Button>
                                    <Button>1</Button>
                                    <Button ><RemoveIcon/></Button>
                                </ButtonGroup>                   
                            </Grid>
                            <Grid className={item}>
                                                  
                            </Grid>
                                <Button className={item} onClick={() => setOpen(false)} sx={{

                                }}>
                                    <ArrowForwardIosIcon />
                                </Button>
                        </Grid>
                    </form>
                </Container>
            </Modal>
        </Box>
    )
}