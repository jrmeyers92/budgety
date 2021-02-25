import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useContext } from "react";
import { BudgetContext } from "./BudgetContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
	paper: {
		width: "50vw",
		marginLeft: "auto",
		marginRight: "auto",
	},
	header: {
		marginTop: "2rem",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		padding: "3rem",
	},
	textField: {
		marginBottom: "1rem",
	},
}));

const CreateBudget = () => {
	const classes = useStyles();
	const [catagory, setCatagory] = useState("");
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");

	const [expenses, setExpenses] = useContext(BudgetContext);

	const addBudget = (e) => {
		e.preventDefault();
		setExpenses((prevExpenses) => [
			...prevExpenses,
			{ group: catagory, name: name, budget: amount, spent: 0 },
		]);
		setCatagory("");
		setName("");
		setAmount("");
	};

	console.log(expenses[4]);

	return (
		<div>
			<Paper className={classes.paper}>
				<Typography variant='h5' className={classes.header}>
					Create a Budget
				</Typography>
				<form className={classes.form} onSubmit={addBudget}>
					<TextField
						label='Choose a catagory'
						id='budgetCatagory'
						onChange={(e) => {
							setCatagory(e.target.value);
						}}
						value={catagory}
					/>
					<TextField
						label='Choose a name'
						id='budgetName'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField
						label='Amount'
						className={classes.textField}
						id='budgetAmount'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>

					<Button type='submit'>
						<Link to='/'>Create Budget</Link>
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default CreateBudget;
