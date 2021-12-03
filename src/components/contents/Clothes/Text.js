import React from 'react'
import Header from './Header'
import './Detail.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Products from './Products'
import { clotTheme } from '../../UIs/theme/clotTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

function Text() {
    return ( 
        <ThemeProvider theme={clotTheme}>
         <div> 
           <div className="example1">
           <h1>SHOP STYLE FASHION MAN</h1> 
          <div className="p">ร้านค้าเสื้อผ้าเเฟชันของผู้ชาย</div> 
            </div>
        <header className="App-header">
        <div className="flex3">
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" sx={{
                    '&.MuiButton-outlined': theme => ({
                        margin: '0 0 0 0',
                        color: theme.palette.common.white,
                        borderColor: theme.palette.common.white
                         })
                        }}>shirt</Button>
                <Button variant="outlined" sx={{
                    '&.MuiButton-outlined': theme => ({
                         color: theme.palette.common.white,
                         borderColor: theme.palette.common.white
                        })
                        }}>shorts</Button>
          <Button variant="outlined" sx={{
                            '&.MuiButton-outlined': theme => ({
                                color: theme.palette.common.white,
                                borderColor: theme.palette.common.white
                            })
                        }}>shoe</Button>
            </Stack>
        </div>
        <div className="App-header1">
            <Header/> 
                </div>       
       <div className="App-header2">
            <Products/> 
                </div>
      </header>
        </div>
        </ThemeProvider>
    )
}         

export default Text