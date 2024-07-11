//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDom from "react-dom";
const YOURNAME = "ram";
const currentDate = new Date();
const CURRENTYEAR = currentDate.getFullYear();

ReactDom.render(
  <div>
    <p>Created by { YOURNAME }</p>
    <p>Copyright { CURRENTYEAR }</p>
  </div>, document.getElementById("root")
);
