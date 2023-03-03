//import react into the bundle
//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let timer = 0
setInterval(()=>{
ReactDOM.render(<Home time={timer}/>, document.querySelector("#app"));
timer++
},1000)
