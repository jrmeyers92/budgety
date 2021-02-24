import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
	return (
		<div className='progressBar'>
			<div className='progressBar__grayBar'></div>
			<div className='progressBar__greenBar'></div>
		</div>
		// style={{ width: props.percent }}
	);
};

export default ProgressBar;
