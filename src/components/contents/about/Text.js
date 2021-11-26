import React from 'react'
import Header from './Header'
import Header1 from './Header1'
import './Detail.css'
function Text() {
    return ( 
         <div>  
           <div className="example1">
           <h1>บริษัท วิโนน่า คอสเมติกส์ จำกัด</h1> 
          <div className="p">Winona Feminine</div> 
            </div>
        <header className="App-header">
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