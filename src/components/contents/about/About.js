import React, { useState } from 'react'
import './Detail.css'
import Header from './Header'
import Text from './Text'

function App() {
    return (
         <div>        
        <Text/>
        <div class="box">
        <div>
        <article align="left">            
            <li><a>บริษัm วิโนน่า คอสเมติกส์ จำกัด</a></li>
            <li><a>139/26 ชั้น 3 อาคาร The Shelter ซอยโชคชัย 4, ถนนลาดพร้าว 53, แขวงสะพานสอง, เขตวังทองหลาง, กรุงเทพมหานคร 10310</a></li>
            <li><a>Mobile : 095-454-5149</a></li>
            <li><a>Line@ : @buyzabuy</a></li>
            <li><a>เวลาทำการ : วันจันทร์ – วันศุกร์ 9.00 – 18.000</a></li>
        </article>
        </div> 
        </div>
        </div>
 
    );
}

export default App;