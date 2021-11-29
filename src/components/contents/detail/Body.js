    import React from "react"
    import './Detail.css'
    import One from './img/1.jpg'
    import Two from './img/2.jpg'
    import Three from './img/3.jpg'
    import four from './img/4.jpg'
    import five from './img/5.jpg'
    import six from './img/6.jpg'
    import Box from '@mui/material/Box';

    import ListItem from '@mui/material/ListItem';
    import ListItemButton from '@mui/material/ListItemButton';
    import ListItemIcon from '@mui/material/ListItemIcon';
    import ListItemText from '@mui/material/ListItemText';
    import FaceRetouchingOffIcon from '@mui/icons-material/FaceRetouchingOff';
    import FaceIcon from '@mui/icons-material/Face';
    import KitesurfingIcon from '@mui/icons-material/Kitesurfing';
    import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
    import ListAltIcon from '@mui/icons-material/ListAlt';



    export default function Body ()
    {
        const[state, setState] = React.useState(0);
        const handleClick = (e) => {
            setState(state+1);
            
        }
         return (   
           
            <div>
                <article align="center">
                    <div className="flex">
                    <img src={One} alt="" align="center"/>
                    </div>
                    <p> ความคล่องแคล่วทางอารมณ์เป็นกระบวนการที่ทำให้เราอยู่กับปัจจุบัน ปรับเปลี่ยนพฤติกรรมที่จะทำให้เราใช้ชีวิตในแนวทางที่ตรงกับความตั้งใจและคุณค่าของเรา โดยที่ไม่ปฎิเสธอารมณ์ร้ายหรือความคิดแย่ๆ แต่ก็ไม่ยึดติดกับมัน กล้าที่จะรับมือกับมัน จากนั้นค่อยเดินหน้าต่อไป ก้าวข้ามมันไปเพื่อเปิดโอกาสให้สิ่งดีๆ เกิดขึ้นกับชีวิตเราได้ การที่จะทำให้เราสามารถมีความคล่องแคล่วทางอารมณ์ได้นั้น จะต้องมีขั้นตอนดังต่อไปนี้ </p>

                    
                <div className="flax">
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor:'rgba(255, 99, 71, 0.6)',align:'center' }} >  
                <nav aria-label="main mailbox folders"></nav>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                <FaceRetouchingOffIcon/>
                            </ListItemIcon>
                            <h1><ListItemText primary="เผชิญหน้ากับความคิด" /></h1> 
                        </ListItemButton>
                     </ListItem>
                </Box>
              </div>
               <div>{state}</div>  
                        
                        <div className="flex">
                            <img src={Two} alt="" align="center"/>
                        </div>              
                    <p>ขั้นตอนแรกคือเปิดเผยมันออกมา เผชิญหน้ากับความคิด อารมณ์ และพฤติกรรมด้วยความตั้งใจ ด้วยความอยากรู้อยากเห็น และความเห็นใจ ไม่ว่าสิ่งนั้นมันจะเป็นเรื่องจริงที่สะท้อนออกมา หรือความคิดที่บิดเบี้ยว ความคิดและอารมณ์เหล่านี้ต่างก็เป็นส่วนหนึ่งของเรา เราเรียนรู้ที่จะอยู่กับมันและก้าวข้ามมันไป</p>
                
                    
                <div className="flax">
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor:'rgba(255, 99, 71, 0.6)',align:'center' }} >  
                <nav aria-label="main mailbox folders"></nav>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaceIcon/>
                            </ListItemIcon>
                            <h1><ListItemText primary="ปลดปล่อยตัวเองออกจากความคิด" /></h1> 
                        </ListItemButton>
                     </ListItem>
                </Box>
              </div>
                        <div className="flex">
                            <img src={Three} alt="" />
                        </div>          
                    <p>ขั้นตอนต่อไปคือเดินออกจากความคิด ปล่อยตัวเราออกจากความคิด และมองดูมันอย่างที่มันเป็น มันก็แค่ความคิด ก็เป็นแค่อารมณ์ เราต้องแยกคนคิดออกจากความคิด ปล่อยให้เกิดช่องว่างระหว่างความรู้สึกกับการตอบสนอง จะทำให้เราเห็นหนทางหลายๆ แบบที่เราจะรับมือกับสถานการณ์ได้ ทำให้เราหลุดจากการควบคุมและทำให้เราไม่อยู่ใต้อำนาจของอารมณ์</p>
                    <p>การเปลี่ยนมุมมอง การดีดตัวและมองออกไป ทำให้เราเรียนรู้ที่จะมองตัวเองเหมือนกระดาน ทำให้เราเห็นความเป็นไปได้ที่มากขึ้น แทนที่จะเป็นแค่หมากในกระดาน ที่ถูกกำหนดทางเดินไว้แล้ว</p>
                    
                    
                <div className="flax">
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor:'rgba(255, 99, 71, 0.6)',align:'center' }} >  
                <nav aria-label="main mailbox folders"></nav>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <KitesurfingIcon/>
                            </ListItemIcon>
                            <h1 color="white"><ListItemText primary="ตัดสินใจทำตามเป้าหมายในชีวิต" /></h1> 
                        </ListItemButton>
                     </ListItem>
                </Box>
              </div>
                        <div className="flex">
                            <img src={four} alt="" align="center"/>
                        </div>
                    <p>ขั้ขั้นตอนต่อไปคือการมุ่งไปยังสิ่งที่เราต้องการ ตามคุณค่าของเรา มุ่งไปตามเป้าหมายที่สำคัญของเรา  รวบรวมความคิดความรู้สึกเข้ากับคุณค่าของเรา ทำให้เราตัดสินใจเพื่อทำตามสิ่งที่เราต้องการ คุณค่าของเราจะเป็นเหมือนเข็มทิศที่ช่วยนำทางเราไปยังเส้นทางที่ถูกต้อง</p>

                    
                    <div className="flax">
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor:'rgba(255, 99, 71, 0.6)',align:'center' }} >  
                <nav aria-label="main mailbox folders"></nav>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FollowTheSignsIcon/>
                            </ListItemIcon>
                            <h1 color="white"><ListItemText primary="ก้าวต่อไป ก้าวไปข้างหน้า" /></h1> 
                        </ListItemButton>
                     </ListItem>
                </Box>
              </div>
                        <div className="flex">
                            <img src={five} alt="" align="center"/>
                        </div>
                    <p>ขั้นตอนสุดท้ายคือการก้าวไปข้างหน้า ปรับเปลี่ยนแก้ไขทีละนิด หาจุดสมดุลระหว่างความท้าทายที่มันไม่เกินความสามารถของเรา ที่มันจะทำให้เราตื่นเต้นและไม่ฝืนและไม่เกินกำลังของตัวเราเอง</p>
                    <p>สิ่งที่สำคัญคือทำให้มันเป็นเรื่องท้าทายและทำให้เราเติบโต</p>
                    
                    <div className="flax">
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor:'rgba(255, 99, 71, 0.6)',align:'center' }} >  
                <nav aria-label="main mailbox folders"></nav>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListAltIcon/>
                            </ListItemIcon>
                            <h1 color="white"><ListItemText primary="สรุป" /></h1> 
                        </ListItemButton>
                     </ListItem>
                </Box>
              </div> 
                         <div className="flex">
                            <img src={six} alt="" align="center"/>
                        </div>
                        <li><a>ความคล่องแคล่วทางอารมณ์คือการไม่เสแสร้ง แต่แสดงออกในแบบที่เราเป็น ให้เห็นคุณค่าและความเป็นตัวเรา สิ่งที่มันจริง โดดเด่น และไม่เหมือนใคร </a></li>
                        <li><a>เราแสดงความเป็นตัวจริงของเราได้โดยการปรับปรุงตัวเองทีละนิดตลอดการเดินทางในชีวิตของเรา </a></li>
                        <li><a> ควบคุมและกำหนดชีวิตของเราเอง รวมถึง พัฒนาตัวเอง งานที่เราทำ จิตวิญญาณ และความสัมพันธ์กับคนอื่นๆ</a></li>
                        <li><a> ยอมรับความเป็นตัวเรา ทั้งสิ่งที่ดีและไม่ดี ด้วยความเห็นใจ ความกล้า และความอยากรู้อยากเห็น</a></li>
                        <li><a>ยอมรับประสบการณ์ที่ผ่านมา ถึงมันจะแย่แต่ก็เรียนรู้จากมัน </a></li>
                        <li><a>พร้อมที่จะก้าวไปข้างหน้า ปรับเปลี่ยนและทิ้งสิ่งที่มันไม่จำเป็นกับเราอีกต่อไป </a></li>
                        <li><a>การมีชีวิตชีวา บางครั้งก็ต้องมีเจ็บปวดบ้าง เกิดความเครียด หรือทำผิดบ้าง </a></li>
                        <li><a>ปลดปล่อยตัวเองจากความสมบูรณ์แบบ เพื่อให้เราสนุกกับการใช้ชีวิตได้ </a></li>
                        <li><a> เปิดใจตัวเองให้กับความรักที่ทำให้เราเจ็บปวด และความเจ็บปวดที่มากับความรัก</a></li>
                        <li><a>เปิดใจตัวเองให้กับความสำเร็จที่มากับความล้มเหลว และความล้มเหลวที่ทำให้เกิดความสำเร็จ </a></li>
                        <li><a> ความกล้าไม่ใช่ไม่กลัว แต่เป็นการยอมรับและเดินหน้าต่อไปทั้งๆ ที่กลัว</a></li>
                        <li><a> ทิ้งความสะดวกสบาย เลือกที่จะกล้า ที่มันจะทำให้เราได้รับโอกาสใหม่ๆ ที่ทำให้เราเติบโต</a></li>
                </article>
            </div>    
             )  
            }