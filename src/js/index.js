//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/home.jsx";

function SimpleCounter(prop){
    return(<div className="bigCounter">
        <div className="four">{prop.digitFour}</div>
        <div className="three">{prop.digitThree}</div>
        <div className="two">{prop.digitTwo}</div>
        <div className="one">{prop.digitOne}</div>
    </div>);
}

SimpleCounter.protoType = {
    digitFour: protoType.number,
    digitThree: protoType.number,
    digitTwo: protoType.number,
    digitOne: protoType.number,
};
let counter = 0;
setInterval (function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
})
ReactDOM.render(<App/>, document.getElementById("root"));

// cuatro o 5 components const for each digit)componentete sueltos, invidual 
// 1 var contantdo, vuelve a 0 (contador del anterior (por su digito))
