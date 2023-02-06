//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/home.jsx";

ReactDOM.render(<App/>, document.getElementById("root"));
