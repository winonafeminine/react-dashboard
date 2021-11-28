import * as React from 'react';
import One from './img/4.png'
import Two from './img/5.png'
export default function SimpleAccordion() {
  return (
    <div>
      <div className="flex1">
        <img src={One} alt="" align="center"/>
        <img src={Two} alt="" align="center"/>
      </div>
    </div>
  );
}
