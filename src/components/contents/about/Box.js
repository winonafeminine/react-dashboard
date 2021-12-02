import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
// import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Tooltip from '@mui/material/Tooltip';


// const [open, setOpen ] = useState(false);

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Tooltip title="Message">
        <Fab color="primary" aria-label="add">
        <ArrowBackIosNewIcon/>
         </Fab></Tooltip>
        <Fab variant="extended">
        <CheckroomIcon sx={{ mr: 1 }}/>CLOTHES</Fab>
        <Tooltip title="Favorite"><Fab><FavoriteIcon/></Fab></Tooltip>
        <Tooltip title="Like"><Fab><ThumbUpIcon/></Fab></Tooltip>
      <Tooltip title="Next" >
        <Fab color="secondary" aria-label="edit">
        <ArrowForwardIosIcon/>
      </Fab></Tooltip>
    </Box>
  );
}
