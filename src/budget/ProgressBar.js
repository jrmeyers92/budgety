import React, { useContext } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ spent, budget }) => {
	const percent = (spent / budget) * 350 + "px";

	return (
		<div className='progressBar'>
			<div className='progressBar__grayBar'></div>
			<div className='progressBar__greenBar' style={{ width: percent }}></div>
		</div>
	);
};

export default ProgressBar;
