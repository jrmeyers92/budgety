import React, { useContext } from "react";
import Budget from "./Budget";
import { BudgetContext } from "../BudgetContext";
import "./Budgets.css";
import { Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { TransactionsContext } from "../TransactionsContext";

const useStyles = makeStyles(() => ({
	button: {
		margin: "2rem",
		marginRight: "auto",
	},
}));

const Budgets = () => {
	const classes = useStyles();

	const [transactions] = useContext(TransactionsContext);
	const [expenses] = useContext(BudgetContext);

	const spentAmount = [];
	for (let i = 0; i < transactions.length; i++) {
		for (let j = 0; j < expenses.length; j++) {
			if (
				expenses[j].name === transactions[i].name &&
				expenses[j].group === transactions[i].group
			) {
				for (let k = 0; k < spentAmount.length; k++) {
					if (spentAmount[k].name === expenses[j].name && )
				}
			}
		}
	}

	// for (let i = 0; i < transactions.length; i++) {
	// 	for (let j = 0; j < expenses.length; j++) {
	// 		if (
	// 			expenses[j].name === transactions[i].name &&
	// 			expenses[j].group === transactions[i].group
	// 		) {
	// 			spentAmount.push({
	// 				name: transactions[i].name,
	// 				spent: transactions[i].spent,
	// 				group: transactions[i].group,
	// 				budget: expenses[j].budget,
	// 			});
	// 		}
	// 	}
	// }

	console.log(spentAmount);

	return (
		<div className='budgets'>
			<Paper>
				<Button className={classes.button} variant='outlined' size='small'>
					<Link to='/createBudget' className='link'>
						Create Budget
					</Link>
				</Button>

				{spentAmount.map((expense) => {
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
