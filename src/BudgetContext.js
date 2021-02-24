import React, { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
	const [expenses, setExpenses] = useState([
		{
			group: "utilities",
			name: "electric",
			budget: 150,
			spent: 134,
		},
		{
			group: "bills",
			name: "cell phone",
			budget: 50,
			spent: 50,
		},
		{
			group: "housing",
			name: "rent",
			budget: 1000,
			spent: 0,
		},
	]);

	return (
		<BudgetContext.Provider value={[expenses, setExpenses]}>
			{children}
		</BudgetContext.Provider>
	);
};
