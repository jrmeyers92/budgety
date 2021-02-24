import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

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
	return (
		<div>
			<Paper className={classes.paper}>
				<Typography variant='h5' className={classes.header}>
					Create a Budget
				</Typography>
				<form className={classes.form}>
					<TextField label='Choose a catagory' />
					<TextField label='Choose a name' />
					<TextField label='Amount' className={classes.textField} />
					<Button>Create Budget</Button>
				</form>
			</Paper>
		</div>
	);
};

export default CreateBudget;
