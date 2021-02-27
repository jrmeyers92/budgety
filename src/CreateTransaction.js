import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import { Link } from "react-router-dom";
import DatePicker from "./DatePicker";

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

const CreateTransaction = () => {
	const classes = useStyles();

	return (
		<div>
			<Paper className={classes.paper}>
				<Typography variant='h5' className={classes.header}>
					Create a Transaction
				</Typography>
				<form className={classes.form}>
					<TextField label='Choose a catagory' id='transactionCatagory' />
					<TextField label='Choose a name' id='transactionName' />
					<TextField
						label='Amount Spent'
						type='number'
						className={classes.textField}
						id='transactionAmount'
					/>

					<DatePicker id='transactionDate' />

					<Button type='submit'>
						<Link to='/' className='link'>
							Create Budget
						</Link>
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default CreateTransaction;
