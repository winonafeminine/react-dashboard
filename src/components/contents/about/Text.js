import React from 'react'
import Header from './Header'
import Header1 from './Header1'
import './Detail.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Text() {
    return ( 
         <div> 
           <div className="example1">
           <h1>บริษัท วิโนน่า คอสเมติกส์ จำกัด</h1> 
          <div className="p">Winona Feminine</div> 
            </div>
        <header className="App-header">
        <div className="flex3">
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" href="https://www.dataforthai.com/company/0105559150702/">ข้อมูลบริษัท</Button>
      <Button variant="outlined" href="https://www.thailandpostmart.com/product/1013490001665/Winona-The-Deep-Cleanse-Sensitive-Cleanser/">สินค้าจำหน่าย</Button>
      <Button variant="outlined" href="https://web.facebook.com/WinonaCosmetic/?_rdc=1&_rdr">ติดต่อสอบถาม</Button>
    </Stack></div>
       <div className="App-header2">
            <Header/>         
            <p>สบู่หญ้ารีแพร์ทำความสะอาดจุดซ่อนเร้น</p>
            <Header1/>         
            <p>โดย ดวงใจ จิตต์มงคล</p>
    </div>
      </header>
        </div>
    );
}         

export default Text