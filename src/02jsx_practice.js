import React from "react";
import ReactDOM from "react-dom";
const name = "preeth";
const currentdate = new Date(2022, 5, 4);

const year = currentdate.getFullYear();
console.log(year);
ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>copy right {year}</p>
  </div>,
  document.getElementById("root")
);
