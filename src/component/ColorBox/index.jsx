import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./ColorBox.scss";
ColorBox.propTypes = {};

function getRandomColor() {
  const colorList = ["deepink", "green", "yellow", "black"];
  const randomIndex = Math.trunc(Math.random() * 4);
  return colorList[randomIndex];
}

function ColorBox() {
  // const initColor = localStorage.getItem("box_color") || "deepink";
  const [color, setColor] = useState(() => {
    return localStorage.getItem("box_color") || "deepink";
  });
  function handleBoxclick() {
    //get random color
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  }
  return (
    <div
      className="colorBox"
      onClick={handleBoxclick}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorBox;
