import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CheckroomIcon from '@mui/icons-material/Checkroom';
export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <ArrowBackIosNewIcon/>
      </Fab>
      <Fab variant="extended">
        <CheckroomIcon sx={{ mr: 1 }} />CLOTHES</Fab>
        <Fab><FavoriteIcon/></Fab>
        <Fab><ThumbUpIcon/></Fab>
        <Fab color="secondary" aria-label="edit">
        <ArrowForwardIosIcon/>
      </Fab>
    </Box>
  );
}
