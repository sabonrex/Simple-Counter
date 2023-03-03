import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="wrapper">
			<Digit digit {(Math.floor(props.time/10))%10}/>
    </div>);
		
};

export default Home;