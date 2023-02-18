//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/home.jsx";

ReactDOM.render(<App/>, document.getElementById("root"));

// cuatro o 5 components const for each digit)componentete sueltos, invidual 
// 1 var contantdo, vuelve a 0 (contador del anterior (por su digito))
