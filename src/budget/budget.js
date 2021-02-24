import React from "react";
import ProgressBar from "./ProgressBar";

const Budget = () => {
	return (
		<div className='budget'>
			<div className='budget__text'>
				<div className='budget__text-left'>
					<span>Group: </span>
					<span>Name</span>
				</div>
				<div className='budget__text-right'>
					<span>
						<span>spent</span> of <span>Budget</span>
					</span>
				</div>
			</div>
			<ProgressBar />
		</div>
	);
};

export default Budget;
