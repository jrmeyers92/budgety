import React, { useContext, useState } from "react";
import Budget from "./Budget";
import { BudgetContext } from "../BudgetContext";
import "./Budgets.css";
import { Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
	button: {
		margin: "2rem",
		marginRight: "auto",
	},
}));

const Budgets = () => {
	const classes = useStyles();

	const [expenses, setExpenses] = useContext(BudgetContext);
	return (
		<div className='budgets'>
			<Paper>
				<Button className={classes.button} variant='outlined' size='small'>
					<Link to='/createBudget' className='link'>
						Create Budget
					</Link>
				</Button>

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
