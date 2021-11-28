import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

function ProductCard(props) {

    const {name, imageSrc, description, price, price1, onImgClick, onViewDetailClick} = props;

    return (
        <Paper sx={{
            '&.MuiPaper-root': theme => ({
                borderRadius: '15px',
                // padding: '0 12px 12px 12px'
                 background: theme.palette.warning.dark,
                 color: theme.palette.common.white,
            })
        }}>
            
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

                {/* rating */}
                <Rating value={5} />

                {/* price and shopping cart */}
                <Box sx={{
                    '&.MuiBox-root': {
                        display: 'flex',
                    }
                }}>                
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
                        {`$${price1}`}
                    </Typography>
                    </Box>
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
    price1: PropTypes.number,
    onImgClick: PropTypes.func,
    onViewDetailClick: PropTypes.func
}

export default ProductCard;
