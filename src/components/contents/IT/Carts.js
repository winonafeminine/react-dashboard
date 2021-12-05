import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { itTheme } from '../../UIs/theme/itTheme';
import Button from '@mui/material/Button'

//icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Carts() {
    return (
        <>
        <ThemeProvider theme={itTheme}>
            <CssBaseline/>
            <Box sx={{backgroundColor: '#D6EAF8', width: '98%', margin: "0 auto", borderRadius: '12px'}}>
                <Box sx={{ flexGrow: 1, width: '97%', margin: "20px auto" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}sx={{ '.MuiPaper-root':{fontSize: '20px', padding: '15px',borderRadius: '12px',}}}>
                            <Item >Checkout</Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item>
                                <Box>
                                    <Button startIcon={<ShoppingCartIcon />}>User Peofile</Button>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider> 
        </>
    )
}
