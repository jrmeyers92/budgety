import React, { useState } from "react";
import "./App.css";
import Nav from "./navs/Nav";
import SecondaryNav from "./navs/SecondaryNav";

function App() {
	const [expenses, setExpenses] = useState([
		{
			group: "utilities",
			name: "electric",
			budget: 150,
		},
	]);
	const [transactions, setTransactions] = useState([]);

	return (
		<div className='App'>
			<Nav />
			<SecondaryNav />
		</div>
	);
}

export default App;
