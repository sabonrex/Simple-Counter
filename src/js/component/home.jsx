import React from "react";
import Digit from "./digit";

//create your first component
const Home = (props) => {
  return (
    <div className="wrapper">
      <Digit digit={Math.floor(props.time /100000) %100000}/>
      <Digit digit={Math.floor(props.time /10000) %10000}/>
      <Digit digit={Math.floor(props.time /1000) %1000}/>
      <Digit digit={Math.floor(props.time /100) %100}/>
      <Digit digit={Math.floor(props.time /10) %10}/>
      <Digit digit={Math.floor(props.time % 10)}/>
    </div>
  );
};

export default Home;