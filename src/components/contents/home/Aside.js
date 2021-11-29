import React from 'react'
import Box from '@mui/material/Box';

function Aside() {
    return (
        <Box sx={{
            '&.MuiBox-root': {
                // width: '100%'
                flexGrow: 1,
                display: 'flex',
            }
        }}>
            <Box sx={{
                '&.MuiBox-root': {
                    width: '60%',
                    display: 'flex',
                    justifyContent: 'center'
                }
            }}>
                Lorem ipsum dolor sit amet.
                Autem minima optio adipisci illum!
                Vero reiciendis animi beatae quod!
                Officiis ratione tempora temporibus quo.
                Facilis quia tenetur eaque mollitia.
                Molestiae ut consequuntur qui sunt.
                Magni facilis eaque id quia?
            </Box>
        </Box>
    )
}

export default Aside
