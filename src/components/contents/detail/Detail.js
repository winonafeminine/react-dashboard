import React from 'react'
import MediaQuery from './Header'
import Image from './iconimage'
import BasicTextFields from './comment'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Detail.css'
import Emotional from './dialog';
import one from './img/1.jpg'
import two from './img/2.jpg'
import three from './img/3.jpg'
import four from './img/4.jpg'

export default function Contact() {
  const [imgValue, setimgValue] = React.useState({
    title: "",
    src: "",
    des: ""
  });
  const [dialogOpen, setDialogOpen] = React.useState(false);
          const food = [
            {
              title: "เผชิญหน้ากับความคิด",
              src: two,
              des: "ขั้นตอนแรกคือเปิดเผยมันออกมา เผชิญหน้ากับความคิด อารมณ์ และพฤติกรรมด้วยความตั้งใจ ด้วยความอยากรู้อยากเห็น และความเห็นใจ ไม่ว่าสิ่งนั้นมันจะเป็นเรื่องจริงที่สะท้อนออกมา หรือความคิดที่บิดเบี้ยว ความคิดและอารมณ์เหล่านี้ต่างก็เป็นส่วนหนึ่งของเรา เราเรียนรู้ที่จะอยู่กับมันและก้าวข้ามมันไป"
            },
            {
                title: "ปลดปล่อยตัวเองออกจากความคิด",
                src: two,
                des: "ขั้นตอนต่อไปคือเดินออกจากความคิด ปล่อยตัวเราออกจากความคิด และมองดูมันอย่างที่มันเป็น มันก็แค่ความคิด ก็เป็นแค่อารมณ์ เราต้องแยกคนคิดออกจากความคิด ปล่อยให้เกิดช่องว่างระหว่างความรู้สึกกับการตอบสนอง จะทำให้เราเห็นหนทางหลายๆ แบบที่เราจะรับมือกับสถานการณ์ได้ ทำให้เราหลุดจากการควบคุมและทำให้เราไม่อยู่ใต้อำนาจของอารมณ์"
            },
            
            {
              title: "ตัดสินใจทำตามเป้าหมายในชีวิต",
              src: three,
              des: "ขั้นตอนต่อไปคือการมุ่งไปยังสิ่งที่เราต้องการ ตามคุณค่าของเรา มุ่งไปตามเป้าหมายที่สำคัญของเรา  รวบรวมความคิดความรู้สึกเข้ากับคุณค่าของเรา ทำให้เราตัดสินใจเพื่อทำตามสิ่งที่เราต้องการ คุณค่าของเราจะเป็นเหมือนเข็มทิศที่ช่วยนำทางเราไปยังเส้นทางที่ถูกต้อง"
            },
            {
              title: "ก้าวต่อไป ก้าวไปข้างหน้า",
              src: four,
              des: "ขั้นตอนต่อไปคือการมุ่งไปยังสิ่งที่เราต้องการ ตามคุณค่าของเรา มุ่งไปตามเป้าหมายที่สำคัญของเรา  รวบรวมความคิดความรู้สึกเข้ากับคุณค่าของเรา ทำให้เราตัดสินใจเพื่อทำตามสิ่งที่เราต้องการ คุณค่าของเราจะเป็นเหมือนเข็มทิศที่ช่วยนำทางเราไปยังเส้นทางที่ถูกต้อง"
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
                  <Emotional open={dialogOpen} setOpen={setDialogOpen} value={imgValue}/>
              </Box>
              <div className = "flex">
                <Typography sx = {{fontFamily :'sans-serif'}} variant = "h5"> Comment <br /><BasicTextFields/></Typography>
              </div>
              </div>
      
    ) 
}

