import React, { useState } from "react";
import "./App.css";
import Nav from "./navs/Nav";
import SecondaryNav from "./navs/SecondaryNav";
import Budgets from "./budget/Budgets";
import { BudgetProvider } from "./BudgetContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBudget from "./CreateBudget";

function App() {
	const [transactions, setTransactions] = useState([]);

	return (
		<div className='App'>
			<Router>
				<Nav />
				<SecondaryNav />
				<Switch>
					<BudgetProvider>
						<Route path='/' exact>
							<Budgets />
						</Route>
						<Route path='/createBudget' exact>
							<CreateBudget />
						</Route>
					</BudgetProvider>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
