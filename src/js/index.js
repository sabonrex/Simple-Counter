//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {proto } 
// include your styles into the webpack bundle
import from 'relative/path/to/stylesheet.scss

function SimpleCounter(props){
    return(<div className="bigCounter">
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
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
ReactDOM.render(<SimpleCounter/>, document.getElementById("root"));

// cuatro o 5 components const for each digit)componentete sueltos, invidual 
// 1 var contantdo, vuelve a 0 (contador del anterior (por su digito))
