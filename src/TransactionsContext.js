import React, { createContext, useState } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
	const [transactions, setTransasctions] = useState([
		{
			transactionGroup: "utilities",
			transactionName: "electric",
			date: "2/14/21",
			spent: 134,
		},
		{
			transactionGroup: "bills",
			transactionName: "cell phone",
			date: "2/25/21",
			spent: 50,
		},
		{
			transactionGroup: "housing",
			transactionName: "rent",
			date: "2/28/21",
			spent: 1000,
		},
		{
			transactionGroup: "transportation",
			transactionName: "gas",
			date: "2/28/21",
			spent: 38.76,
		},
	]);

	return (
		<TransactionsContext.Provider value={[transactions, setTransasctions]}>
			{children}
		</TransactionsContext.Provider>
	);
};
