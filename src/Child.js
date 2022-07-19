import React from "react";
import {useState} from "react";
import { getRandomColor } from "./randomColorGenerator.js";

let newColor=getRandomColor();
function Child({ onChangeColor }) {
  const [color, setColor] = useState(getRandomColor());
    function handleColorChange(){
    onChangeColor();
   newColor=getRandomColor();
    setColor(newColor); 
  }
  return (
  <div onClick={handleColorChange}
  className="child" style={{ backgroundColor: newColor}} 
    />
  );
}

export default Child;
