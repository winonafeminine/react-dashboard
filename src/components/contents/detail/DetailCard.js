import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip'

// icons
import InfoIcon from '@mui/icons-material/Info';

function DetailCard(props) {
    // get value from parent to child
    const {title, imageSrc, description, price, salePrice,
         onImgClick, onViewDetailClick} = props;
    
    return (
        <Paper sx={{
            '&.MuiPaper-root': theme => ({
                borderRadius: '12px 12px 0 12px',
                // padding: '0 12px 12px 12px'
                background: theme.palette.success.main,
                boxShadow: `0 0 5px 0 ${theme.palette.success.dark}`,
                transition: theme.transitions.create(['box-shadow','transform'],{
                    duration: theme.transitions.duration.standard
                }),
                '&:hover' : {
                    boxShadow: `0 0 10px 0 ${theme.palette.success.main}`,
                    transform: 'scale(1.1)'
                }
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
                        borderRadius: '12px 12px 0 0',
                        cursor: 'pointer'
                    }
                })
            }}>
                <img onClick={onImgClick} className="imageSrc" src={imageSrc} alt="" />
            </Box>

            {/* text or title area */}
            <Box sx={{
                padding: '12px'
            }}>
                {/* product name */}
                <Typography variant="h5" color="white">
                    {title}
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
                            alignItems: 'flex-end',
                            flexGrow: 1
                        }
                    }}>
                        <Typography variant="h6" color="white">
                            {`$${price}`}
                        </Typography>
                        <Typography variant="h6"  sx={{
                            margin: '0 0 0 6px',
                            textDecoration: 'line-through',
                            // fontSize: '15px'
                        }}>
                            {`$${salePrice}`}
                        </Typography>
                    </Box>
                    <Box>
                        {/* Tooltip = ???????????????????????????????????? */}
                        <Tooltip title="View this sweater detail"> 
                            <Button variant="outlined" sx={{
                                '&.MuiButton-outlined': theme => ({
                                    color: theme.palette.common.white,
                                    borderColor: theme.palette.common.white
                                })
                            }} startIcon={<InfoIcon/>} 
                                onClick={onViewDetailClick}
                                >View Detail</Button>  
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

// specify the type for each properties
DetailCard.propTypes = {
    title: PropTypes.string, 
    imageSrc: PropTypes.string, 
    description: PropTypes.string, 
    price: PropTypes.number,
    salePrice: PropTypes.number,
    onImgClick: PropTypes.func,
    onViewDetailClick: PropTypes.func,
    gallery: PropTypes.array
}

export default DetailCard
