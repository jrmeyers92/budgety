import React, { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
	const [expenses, setExpenses] = useState([
		{
			group: "utilities",
			name: "electric",
			budget: 150,
			spent: null,
		},
		{
			group: "bills",
			name: "cell phone",
			budget: 50,
			spent: null,
		},
		{
			group: "housing",
			name: "rent",
			budget: 1000,
			spent: null,
		},
		{
			group: "transportation",
			name: "gas",
			budget: 90,
			spent: null,
		},
	]);

	return (
		<BudgetContext.Provider value={[expenses, setExpenses]}>
			{children}
		</BudgetContext.Provider>
	);
};
