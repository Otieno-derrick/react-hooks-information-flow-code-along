import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function handleColorChange(){
    setColor(color=>color=getRandomColor())
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleColorChange}/>
      <Child onChangeColor={handleColorChange}/>
    </div>
  );
}

export default Parent;
