import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';

function ProductCard(props) {
    const {name, imageSrc, description, price, price1, onImgClick} = props;
    return (
        <Paper sx={{
            '&.MuiPaper-root': theme => ({
                borderRadius: '15px',
                // padding: '0 12px 12px 12px'
            })
        }}>
            {/* cat image wrapper */}
            <Box sx={{
                '&.MuiBox-root': theme => ({
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                    '& img.imageSrc': {
                        width: '100%',
                        height: 300,
                        borderRadius: '12px 12px 0 0'
                    }
                })
            }}>
                <img  onClick={onImgClick} className="imageSrc" src={imageSrc} alt="" />
            </Box>

            {/* text or title area */}
            <Box sx={{
                padding: '12px'
            }}>
                {/* product name */}
                <Typography variant="h5">
                    {name}
                </Typography>

                {/* description */}
                <Typography>
                    {description}
                </Typography>
                
                {/* price */}
                <Box sx={{
                    '&.MuiBox-root': {
                        display: 'flex',
                        alignItems: 'flex-end'
                    }
                }}>
                    <Typography variant="h6">
                        {price}
                    </Typography>
                    <Typography variant="h6" sx={{
                        margin: '0 0 0 8px',
                    }}>
                        {price1}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string, 
    imageSrc: PropTypes.string, 
    description: PropTypes.string, 
    price: PropTypes.string,
    price1: PropTypes.string,
    onImgClick: PropTypes.func
}

export default ProductCard;
