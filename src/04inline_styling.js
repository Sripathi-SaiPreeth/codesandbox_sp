import React from "react";
import ReactDOM from "react-dom";
const customStyle = {
  color: "red",
  fontSize: "40px",
  border: "3px solid black"
};
customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello world</h1>,
  document.getElementById("root")
);
