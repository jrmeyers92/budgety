import React from "react";
import ProgressBar from "./ProgressBar";
import "./Budget.css";

const Budget = (props) => {
	return (
		<div className='budget'>
			<div className='budget__text'>
				<div className='budget__text-left'>
					<span>
						<strong>{props.group}: </strong>
					</span>
					<span>{props.name}</span>
				</div>
				<div className='budget__text-right'>
					<span>
						<span>{props.spent} </span> of <span> {props.budget}</span>
					</span>
				</div>
			</div>
			<ProgressBar spent={props.spent} budget={props.budget} />
		</div>
	);
};

export default Budget;
