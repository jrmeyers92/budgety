import React, { useState } from "react";
import "./App.css";
import Nav from "./navs/Nav";
import SecondaryNav from "./navs/SecondaryNav";
import Budgets from "./budget/Budgets";
import { BudgetProvider } from "./BudgetContext";

function App() {
	const [transactions, setTransactions] = useState([]);

	return (
		<div className='App'>
			<Nav />
			<SecondaryNav />
			<BudgetProvider>
				<Budgets />
			</BudgetProvider>
		</div>
	);
}

export default App;
