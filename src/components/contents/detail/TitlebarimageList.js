import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import One from './img/1.jpg'
import Two from './img/2.jpg'
import Three from './img/3.jpg'
import four from './img/4.jpg'

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 500 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: '#000000' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: One,
    title: 'เผชิญหน้ากับความคิด',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: Two,
    title: 'ปลดปล่อยตัวเองออกจากความคิด',
    author: '@arompraepruan',
  },
  {
    img: Three,
    title: 'ตัดสินใจทำตามเป้าหมายในชีวิต',
    author: '@helloimnik',
  },
  {
    img: four,
    title: 'ก้าวต่อไป ก้าวไปข้างหน้า',
    author: '@nolanissac',
    cols: 2,
  }
];