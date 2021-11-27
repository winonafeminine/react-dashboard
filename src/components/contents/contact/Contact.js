import React from 'react'
import MediaQuery from './Hcontact'
import Tcontact from './Tcontact'
import Image from './StandardImageList'
import BasicTextFields from './Textfield'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './style.css'
import FoodDialog from './dialog';
export default function Contact() {
  const [imgValue, setimgValue] = React.useState({
    title: "",
    src: "",
    des: ""
  });
  const [dialogOpen, setDialogOpen] = React.useState(false);
          const food = [
            {
              title: "Breakfast",
              src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
              des: "This is Breackfast"
            },
            {
                title: "Camera",
                src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
                des: "This is Camera"
            },
            
            {
              title: "Coffee",
              src: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
              des: "This is Coffee"
            },
          ]
  const handleImgClicked = (value) => {
    setimgValue(value);
    setDialogOpen(true)
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
                                  />
                              </Grid>
                          ))}
                      </Grid>
                  </Box>
                  <FoodDialog open={dialogOpen} setOpen={setDialogOpen} value={imgValue}/>
              </Box>
              <div className = "flex">
                <Typography sx = {{fontFamily :'sans-serif'}} variant = "h5">You Can Follow Our Company By This Link <br /><Tcontact/></Typography>
                <Typography sx = {{fontFamily :'sans-serif'}} variant = "h5"> Send Feedback <br /><BasicTextFields/></Typography>
              </div>
            </div>
      
    ) 
}

