import React from 'react'
import { useEffect, useState } from "react";
import React, {useState} from "react";
import React, {Component, useState} from "react";
 function UseState1 () {
 //  useState  
 const [buttonText, setButonText] = useState ("Clik me, Please");
 const [incrememt, setincrememt] = useState (0);
 //  useEffect
    //  useEffect (effect: () => {
    //      const rgbElem = document.querySelector(selectors: '.rgb');
    //      rgbElem.style.color = 'rgb(${rgb.join(',')})';
    //  });
   
    return (
        <div>
            <button onClick={() => setButonText ("Thanks, been Clicked")}>{buttonText}</button>
            <h>{setincrememt}</h>
        </div>
    );

}
export default UseState1;