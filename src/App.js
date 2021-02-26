import React from "react";
import "./App.css";
import Nav from "./navs/Nav";
import SecondaryNav from "./navs/SecondaryNav";
import Budgets from "./budget/Budgets";
import { BudgetProvider } from "./BudgetContext";
import { TransactionsProvider } from "./TransactionsContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBudget from "./CreateBudget";
import Transactions from "./Transactions/Transactions";
import CreateTransaction from "./CreateTransaction";

function App() {
	return (
		<div className='App'>
			<Router>
				<Nav />
				<SecondaryNav />
				<Switch>
					<TransactionsProvider>
						<BudgetProvider>
							<Route path='/' exact>
								<Budgets />
							</Route>
							<Route path='/createBudget' exact>
								<CreateBudget />
							</Route>
							<Route path='/transactions'>
								<Transactions />
							</Route>
							<Route path='/createtransaction'>
								<CreateTransaction />
							</Route>
						</BudgetProvider>
					</TransactionsProvider>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
