import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import './style.css'
import MediaQuery from './Hcontact'
import Tcontact from './Tcontact'
import Image from './StandardImageList'
import BasicTextFields from './Textfield'
import FoodDialog from './dialog';
import Blackpink from './img/blackpink.jpg';
import Bigbang from './img/bigbang.jpg';
import Treasure from './img/treasure.jpg';
import Ikon from './img/ikon.png';
import Winner from './img/winner.jpeg';
import Bts from './img/bts.jfif';
export default function Contact() {
  const [imgValue, setimgValue] = React.useState({
    title: "",
    src: "",
    des: ""
  });
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = React.useState(false);
          const food = [
            {
              title: "BLACKPINK",
              src: Blackpink,
              des: "MEMBER : JISOO JENNIE ROSE AND LISA "
            },
            {
                title: "BIGBANG",
                src: Bigbang,
                des: " MEMBER : T.O.P G-DRAGON TAEYANG DAESONG "
            },
            
            {
              title: "TREASURE",
              src: Treasure,
              des: "MEMBER : HARUTO ASAHI YEDAM JUNKYU AND ANYMORE  "
            },
            {
              title: "ikon",
              src: Ikon,
              des: "MEMBER : JINHWAN B.I BOBBY  YOONHYUK DONGHYUK JUNE CHANWOO   "
            },
            {
              title: "WINNER",
              src: Winner,
              des: "MEMBER : JINWOO MINO SENGHOON SENGYOON "
            },
            {
              title: "BTS",
              src: Bts,
              des: "MEMBER : RM JIN V J-HOPE JONGKOOK SUGA JIMIN "
            },
          ]
  const handleImgClicked = (value) => {
    setimgValue(value);
    setDialogOpen(true)
  }
  const handleViewDetailClick = (value) => {
    // save to localstorage/coookies
    const kpopdetail = 'kpopdetail';
    // convert to string
    const str_value = JSON.stringify(value);
    localStorage.setItem(kpopdetail, str_value);
    navigate('/Kcenter/detail')
}

          return (
            <div>
              <MediaQuery/>
              <Box sx={{
                  display: 'flex',
                  justifyContent: 'center'
              }}>
                  <Box sx={{
                      width: '80%'
                  }}>
                      <Grid container spacing={2} sx={{
                          margin: '20px 0 0 0'
                      }}>
                          {food.map((value, ind) => (
                              <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                                  <Image
                                      title={value.title}
                                      imageSrc={value.src}
                                      Description={value.des}
                                      onImgClick={() => handleImgClicked(value)}
                                      onViewDetailClick={() => handleViewDetailClick(value)}
                                  />
                              </Grid>
                          ))}
                      </Grid>
                  </Box>
                  <FoodDialog open={dialogOpen} setOpen={setDialogOpen} value={imgValue}/>
              </Box>
              <div className = "flex">
                <Typography sx = {{fontFamily :'sans-serif'}} variant = "h5">You Can Follow Your Favorite Artist By This Link <br /><Tcontact/></Typography>
                <Typography sx = {{fontFamily :'sans-serif'}} variant = "h5"> Send Message To your Artist <br /><BasicTextFields/></Typography>
              </div>
            </div>
      
    ) 
}

