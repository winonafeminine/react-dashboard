import React from 'react'
import MediaQuery from './Header'
import BasicTextFields from './comment'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Detail.css'
import Emotional from './dialog';
import itim from './img/itim.jpg'
import itim1 from './img/itim1.jpg'
import stpp from './img/stpp.jpg'
import stpp1 from './img/stpp1.jpg'
import stpp2 from './img/stpp2.jpg'
import stb from './img/stb.jpg'
import stb1 from './img/stb1.jpg'
import stb2 from './img/stb2.jpg'
import puma from './img/puma.jpg'
import puma1 from './img/puma1.jpg'
import puma2 from './img/puma2.jpg'

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { catTheme } from '../../UIs/theme/catTheme';
import {useNavigate} from 'react-router-dom';
import DetailCard from './DetailCard';
import Grow from '@mui/material/Grow';



export default function Detail() {
  const [imgValue, setimgValue] = React.useState({
    title: "",
    src: "",
    price: 0,
    salePrice: 0,
    des: ""
  });

  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = React.useState(false);
          const sweater = [ 
            {
              title: "Sweater USA",
              src: stpp,
              price: 19,
              salePrice: 50,
              des: "เสื้อสเวเตอร์นำเข้างาน USA" ,
              amount:0 ,
              gallery:[ 
                stpp,
                stpp1,
                stpp2,
            ]
            
            },
            { 
                title: "Sweater Brand",
                src: puma,
                price: 19,
                salePrice: 50,
                des: "เสื้อสเวเตอร์งานแบรนด์",
                amount:0 ,
                gallery: [ 
                  puma,
                  puma1,
                  puma2,
                ]
            },
            
            {
              title: "Sweater Minimol",
              src: itim,
              price: 19,
              salePrice: 50,
              des: "เสื้อสเวเตอร์งานมินิมอล",
              amount:0 ,
              gallery:[
                itim,
                itim1,
              ]
            },
            {
              title: "Sweater Low-priced",
              src: stb,
              price: 19,
              salePrice: 50,
              des: "เสื้อสเวเตอร์ราคาถูก",
              amount:0 ,
              gallery:[
                stb,
                stb1,
                stb2,
              ] 
            },
          ]
  const handleImgClicked = (value) => {
    setimgValue(value);
    setDialogOpen(true)
  }

  const handleViewDetailClick = (value) => {
    // const catname = 'catname';
    // const catsrc = 'catsrc';
    // const catprice = 'catprice';
    // const catsaleprice = 'catsaleprice';
    // const catdes = 'catdes';

    // save to localstorage/coookies
    const dtdetail = 'dtdetail';
    // convert to string
    const str_value = JSON.stringify(value);
    localStorage.setItem(dtdetail, str_value);
    navigate('/suha/sweater')
}
          return (
            <ThemeProvider theme={catTheme}>
            <CssBaseline/>
            <MediaQuery/>
              <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  backgroundColor: '#4caf50'
              }}>
                  <Box sx={{
                      width: '90%'
                  }}>
                      <Grid container spacing={2} sx={{
                          margin: '20px 20px 15px 0px'
                      }}>
                          {sweater.map((value, ind) => (
                             <Grow in={true} timeout={{
                                enter: 1000 + ((ind+1) -1)*300
                          }}key={value.title}> 
                              <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                                  <DetailCard  
                                      title={value.title}
                                      imageSrc={value.src}
                                      Description={value.des}
                                      price ={value.price}
                                      salePrice={value.salePrice}
                                      onImgClick={() => handleImgClicked(value)}
                                      onViewDetailClick={() => handleViewDetailClick(value)}
                                      gallery={value.gallery}
                                  />
                              </Grid>
                            </Grow>
                          ))}
                      </Grid>
                  </Box>
                  <Emotional open={dialogOpen} setOpen={setDialogOpen} value={imgValue}/>
              </Box>
              <Box sx={{
                backgroundColor: '#4caf50' ,
                display: 'flex' ,
                justifyContent: 'center' ,
                padding: '20px 0 0 0'
              }}>
                <Typography sx = {{}} variant = "h5"> Comment</Typography>
                <BasicTextFields/>
              </Box>
              </ThemeProvider>
    ) 
}

