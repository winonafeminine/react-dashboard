import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

// icons
import InfoIcon from '@mui/icons-material/Info';

function ItCardDetail(props) {
    // get value from parent to child
    const {name, imageSrc, description, price, salePrice, onImgClick, onViewDetailClick} = props;
    
    return (
        <Paper sx={{
            '&.MuiPaper-root': theme => ({
                borderRadius: '12px',
                height: '350px',
                // padding: '0 12px 12px 12px'
                background: '#F7F7F7'
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
                        height: '200px',
                        borderRadius: '12px 12px 0 0',
                        cursor: 'pointer'
                    }
                })
            }}>
                <img onClick={onImgClick} className="imageSrc" src={imageSrc} alt="" />
            </Box>

            {/* text or title area */}
            <Box sx={{
                padding: '12px',
            }}>
                {/* product name */}
                <Box sx={{width:"100%", whiteSpace: 'nowrap'}}>
                    <Typography variant="h5" sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    textOverflow: 'ellipsis',
                }}>
                    {name}
                    </Typography>
                </Box>

                {/* description */}
                <Box sx={{width:"100%", whiteSpace: 'nowrap'}}>
                    <Typography sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                    textOverflow: 'ellipsis',
                }}>
                    {description}
                    </Typography>
                </Box>              
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
                            alignItems: 'flex-end',
                            flexGrow: 1
                        }
                    }}>
                        <Typography variant="h5">
                            {`$${price}`}
                        </Typography>
                        <Typography variant="h7" sx={{
                            margin: '0 0 0 6px',
                            textDecoration: 'line-through',
                            color: 'red'
                            // fontSize: '15px'
                        }}>
                            {`$${salePrice}`}
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="outlined" sx={{
                            '&.MuiButton-outlined': theme => ({
                                fontSize: '10px',
                                color: theme.palette.info.dark,
                                borderColor: theme.palette.info.dark,
                            })
                        }} startIcon={<InfoIcon/>} 
                            onClick={onViewDetailClick}
                        >View Detail</Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

// specify the type for each properties
ItCardDetail.propTypes = {
    name: PropTypes.string, 
    imageSrc: PropTypes.string, 
    description: PropTypes.string, 
    price: PropTypes.number,
    salePrice: PropTypes.number,
    onImgClick: PropTypes.func,
    onViewDetailClick: PropTypes.func
}

export default ItCardDetail
