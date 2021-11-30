import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


 function Image (props){
  const {title,imageSrc,Description, onImgClick,onViewDetailClick} = props;
  return (
      <Paper sx={{
        '&.MuiPaper-root': theme => ({
            borderRadius: '12px 12px 0 12px',
            background: theme.palette.warning.main})
      }}>
      <Box sx={{
                '&.MuiBox-root': theme => ({
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'center',
                    '& img.imageSrc': {
                        width: '100%',
                        height: 200,
                        borderRadius: '12px 12px 0 0',
                        cursor: 'pointer'}
                })
            }}>
        
              <img onClick={onImgClick} className="imageSrc" src={imageSrc} alt="" /> 
        </Box>
        <Box  
        sx ={{padding : '12px'}}>
              <Typography variant = "h6">{title}</Typography>
        </Box>
        <Box sx ={{
             display:'flex',
             justifyContent:'flex-end',
             
        }}>
            <Button variant="outlined" sx={{ 
              marginRight:'10px',
              marginBottom:'10px',
             '&.MuiButton-outlined': theme => ({
              color: theme.palette.common.white,
              borderColor: theme.palette.common.white
             })
             }}
             onClick={onViewDetailClick}>
               View Detail
            </Button>
        </Box>
        
    </Paper>
  )
 }
 Image.propTypes = {
  title: PropTypes.string, 
  imageSrc: PropTypes.string, 
  Description: PropTypes.string, 
  onImgClick: PropTypes.func,
  onViewDetailClick: PropTypes.func
}
export default Image
    