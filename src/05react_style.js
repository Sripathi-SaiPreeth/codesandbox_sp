import React from "react";
import ReactDOM from "react-dom";
const date = new Date(2009, 1, 1, 16);
const currentTime = date.getHours();
const customStyle = {
  color: ""
};
let greeting;
if (currentTime < 12) {
  greeting = "goodmorning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "good afternoon";
  customStyle.color = "green";
} else {
  greeting = "good evening";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
