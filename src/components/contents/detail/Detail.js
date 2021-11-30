import React from 'react'
import MediaQuery from './Header'
import BasicTextFields from './comment'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Detail.css'
import Emotional from './dialog';
import sty from './img/sty.jpg'
import str from './img/str.jpg'
import stp from './img/stp.jpg'
import stg from './img/stg.jpg'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { catTheme } from '../../UIs/theme/catTheme';
import {useNavigate} from 'react-router-dom';
import DetailCard from './DetailCard';



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
              src: sty,
              price: 19,
              salePrice: 50,
              des: "เสื้อสเวเตอร์นำเข้างาน USA" ,
            
            },
            { 
                title: "Sweater Brand",
                src: str,
                price: 19,
                salePrice: 50,
                des: "เสื้อสเวเตอร์งานแบรนด์"
            },
            
            {
              title: "Sweater Minimol",
              src: stp,
              price: 19,
              salePrice: 50,
              des: "เสื้อสเวเตอร์งานมินิมอล"
            },
            {
              title: "Sweater Low-priced",
              src: stg,
              price: 19,
              salePrice: 50,
              des: "เสื้อสเวเตอร์ราคาถูก"
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
                              <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                                  <DetailCard 
                                      
                                      title={value.title}
                                      imageSrc={value.src}
                                      Description={value.des}
                                      onImgClick={() => handleImgClicked(value)}
                                      onViewDetailClick={() => handleViewDetailClick(value)}
                                      price ={value.price}
                                      salePrice={value.salePrice}
                                  />
                              </Grid>
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

