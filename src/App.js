import React, { useState } from "react";
import "./App.css";
import Nav from "./navs/Nav";
import SecondaryNav from "./navs/SecondaryNav";
import Budgets from "./budget/Budgets";

function App() {
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

	const [transactions, setTransactions] = useState([]);

	return (
		<div className='App'>
			<Nav />
			<SecondaryNav />
			<Budgets />
		</div>
	);
}

export default App;
