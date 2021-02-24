import React, { useContext } from "react";
import Budget from "./Budget";
import { BudgetContext } from "../BudgetContext";
import "./Budgets.css";
import { Paper } from "@material-ui/core";

const Budgets = () => {
	const [expenses, setExpenses] = useContext(BudgetContext);
	return (
		<div className='budgets'>
			<Paper>
				{expenses.map((expense) => {
					return (
						<Budget
							group={expense.group}
							name={expense.name}
							budget={expense.budget}
							spent={expense.spent}
						/>
					);
				})}
			</Paper>
		</div>
	);
};

export default Budgets;
