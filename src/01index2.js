import React from "react";
import ReactDOM from "react-dom";
const name = "preeth";
const lname = "S";
const num = 7;
ReactDOM.render(
  <div>
    <h1>hello {name + " " + lname} </h1>
    <p>My lucky number is {Math.floor(Math.random() * 100)}</p>
  </div>,
  document.getElementById("root")
);
