//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home";



const Digit = (props) => {
    return(<div className="wrapper">
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <Digit digit {(Math.floor(props.time/10))%10}/>
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

let timer  = 0
setInterval(()=>{
    ReactDOM.render(<Home time={timer}/>, document.getElementById("#app"));
timer ++
}, 1000)


// cuatro o 5 components const for each digit)componentete sueltos, invidual 
// 1 var contantdo, vuelve a 0 (contador del anterior (por su digito))
