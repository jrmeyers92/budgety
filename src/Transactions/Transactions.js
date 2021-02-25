import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useContext, useEffect } from "react";
import { BudgetContext } from "../BudgetContext";

const useStyles = makeStyles(() => ({
	paper: {
		width: "50vh",
		marginLeft: "auto",
		marginRight: "auto",
	},
	header: {
		margin: "1rem",
	},
	button: {
		margin: "1rem",
	},
}));

const Transactions = () => {
	const classes = useStyles();
	const [expenses, setExpenses] = useContext(BudgetContext);
	const [transactions, setTransactions] = useState([]);

	console.log(expenses.name === "electric");

	return (
		<div>
			<Paper className={classes.paper}>
				<Typography variant='h5' className={classes.header}>
					Transactions
				</Typography>
				{transactions.map((transaction) => {
					return "hi";
				})}

				<Button variant='outlined' size='small' className={classes.button}>
					Add Transaction
				</Button>
			</Paper>
		</div>
	);
};

export default Transactions;
