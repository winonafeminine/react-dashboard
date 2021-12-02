import * as React from 'react';
import One from './img/4.png'
import Two from './img/5.png'
import Three from './img/6.png'
export default function SimpleAccordion() {
  return (
    <div>
      <div className="flex1">
        <img src={Three} alt="" align="center"/>
        <img src={One} alt="" align="center"/>
        <img src={Two} alt="" align="center"/>
      </div>
    </div>
  );
}
