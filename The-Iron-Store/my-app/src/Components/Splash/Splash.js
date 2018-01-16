import React, { Component } from 'react';
import '../../index.css';
import Background from './Background';

class Splash extends Component {
	constructor() {
		super();
	}

	render() {
	 return (
		<div className="bodydiv">
		  <div className="titlediv">
		    <img className="logo" alt="logo"
			 src={"newmotherfuckinglogo.png"} />
			 <p>Don't do you ... do Nu</p>
			 
		   </div>
		   <div className="buttondiv">
		     <p>button1</p>
			 <p>button2</p>
		   </div>
		   <Background />
		 </div>
		
	)}
}

export default Splash;