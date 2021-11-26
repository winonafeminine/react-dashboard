import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import One from './img/7.png'
export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>ข้อมูลบริษัท</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>        
            <p>"วิโนน่า คอสเมติกส์" อีกหนึ่งธุรกิจเอสเอ็มอีไทย ตั้งแต่ 5 ปีก่อน</p>
            <li><a>ที่มองเห็นโอกาสการทำธุรกิจจากคนใกล้ตัว  จากนั้นจึงได้เริ่มงานวิจัยศึกษาคุณสมบัติสมุนไพรไทย</a></li>
            <li><a>"หญ้ารีแพร์" อย่างจริงจัง ก่อนพัฒนาไปสู่ผลิตภัณฑ์นวัตกรรมเครื่องสำอาง ภายใต้อนุสิทธิบัตร แบรนด์</a></li>
            <li><a>"วิโนน่า คอสเมติกส์" เพื่อทำตลาดทั้งในและต่างประเทศ</a></li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>ติดต่อสอบถาม</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>บริษัท วิโนน่า คอสเมติกส์ จำกัด</p>
            <li><a>139/26 ชั้น 3 อาคาร The Shelter ซอยโชคชัย 4, ถนนลาดพร้าว 53, แขวงสะพานสอง, เขตวังทองหลาง, กรุงเทพมหานคร 10310</a></li>
            <li><a>Mobile : 095-454-5149</a></li>
            <li><a>Line@ : @buyzabuy</a></li>
            <li><a>เวลาทำการ : วันจันทร์ – วันศุกร์ 9.00 – 18.000</a></li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="flex1"><img src={One} alt="" align="center"/></div>
    </div>
  );
}
