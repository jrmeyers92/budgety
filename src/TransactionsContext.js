import React, { createContext, useState } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
	const [transactions, setTransasctions] = useState([
		{
			group: "utilities",
			name: "electric",
			date: "2/14/21",
			spent: 134,
		},
		{
			group: "bills",
			name: "cell phone",
			date: "2/25/21",
			spent: 50,
		},
		{
			group: "housing",
			name: "rent",
			date: "2/28/21",
			spent: 1000,
		},
		{
			group: "transportation",
			name: "gas",
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
