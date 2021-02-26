import React from "react";

const TransactionGroup = ({ transactionGroup }) => {
	return (
		<div>
			<span>
				<strong>{transactionGroup}:</strong>
			</span>
		</div>
	);
};

export default TransactionGroup;
