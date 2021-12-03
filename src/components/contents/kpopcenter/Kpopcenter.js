import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import './style.css'
import MediaQuery from './Headerkpop'
import Tcontact from './Tcontact'
import Image from './Card'
import BasicTextFields from './Textfield'
import FoodDialog from './dialog';
import Grow from '@mui/material/Grow';
// picture
import Blackpink from './img/blackpink2.jpg';
import Blackpink2 from './img/blackpink3.jfif';
import Blackpink3 from './img/blackpink4.jpg';
import Bigbang from './img/bigbang3.jpg';
import Bigbang2 from './img/bigbang4.jpg';
import Bigbang3 from './img/bigbang5.png';
import Treasure from './img/treasure2.jpg';
import Treasure2 from './img/treasure3.jpg';
import Treasure3 from './img/treasure4.png';
import Ikon from './img/ikon.png';
import Ikon2 from './img/ikon2.jpg';
import Ikon3 from './img/ikon3.jpg';
import Winner from './img/winner.jpeg';
import Winner2 from './img/winner2.jpg';
import Winner3 from './img/winner3.png';
import Bts from './img/bts2.jpg';
import Bts2 from './img/bts3.jpg';
import Bts3 from './img/bts4.jpg';
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
              des: "MEMBER : JISOO JENNIE ROSE AND LISA ",
              gallary: [
                Blackpink , Blackpink2,Blackpink3
              ]
             
            },
            {
                title: "BIGBANG",
                src: Bigbang,
                des: " MEMBER : T.O.P G-DRAGON TAEYANG DAESONG ",
                gallary: [
                  Bigbang, Bigbang2,Bigbang3
                ]
              },
            {
              title: "TREASURE",
              src: Treasure,
              des: "MEMBER : HARUTO ASAHI YEDAM JUNKYU AND ANYMORE  ",
              gallary: [
                Treasure,Treasure2,Treasure3
              ]
            },
            {
              title: "ikon",
              src: Ikon,
              des: "MEMBER : JINHWAN B.I BOBBY  YOONHYUK DONGHYUK JUNE CHANWOO   ",
              gallary: [
                Ikon, Ikon2,Ikon3
              ]
            },
            {
              title: "WINNER",
              src: Winner,
              des: "MEMBER : JINWOO MINO SENGHOON SENGYOON ",
              gallary: [
                Winner, Winner2,Winner3
              ]
            },
            {
              title: "BTS",
              src: Bts,
              des: "MEMBER : RM JIN V J-HOPE JONGKOOK SUGA JIMIN ",
              gallary: [
                Bts, Bts2,Bts3
              ]
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
                            <Grow in={true} timeout={{
                              enter: 1000 + ((ind+1) -1)*300
                          }}>
                              <Grid item xl={3} lg={4} sm={6} xs={12} key={ind}>
                                  <Image
                                      title={value.title}
                                      imageSrc={value.src}
                                      Description={value.des}
                                      gallery={value.gallary}
                                      onImgClick={() => handleImgClicked(value)}
                                      onViewDetailClick={() => handleViewDetailClick(value)}
                                  />
                              </Grid>
                            </Grow>
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
 
 

