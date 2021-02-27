import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState, useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";
import TransactionGroup from "./TransactionGroup";
import TransactionName from "./TransactionName";
import TransactionDate from "./TransactionDate";
import TransactionAmount from "./TransactionAmount";
import "./Transactions.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
	paper: {
		width: "70vh",
		marginTop: "2rem",
		marginLeft: "auto",
		marginRight: "auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "Center",
		justifyContent: "center",
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
	const [transactions, setTransactions] = useContext(TransactionsContext);

	return (
		<div>
			<Paper className={classes.paper}>
				<Typography variant='h5' className={classes.header}>
					Transactions
				</Typography>
				<table>
					<tr className='tableHeaderRow'>
						<th className='tableHeader'>Budget Group</th>
						<th className='tableHeader'>Budget Name</th>
						<th className='tableHeader'>Date</th>
						<th className='tableHeader'>Amount</th>
					</tr>
					{transactions.map((transaction) => {
						return (
							<>
								<tr className='tableRow'>
									<td className='tableData'>
										<TransactionGroup
											transactionGroup={transaction.transactionGroup}
										/>
									</td>
									<td className='tableData'>
										<TransactionName
											transactionName={transaction.transactionName}
										/>
									</td>
									<td className='tableData'>
										<TransactionDate date={transaction.date} />
									</td>
									<td className='tableData'>
										<TransactionAmount amount={transaction.spent} />
									</td>
								</tr>
							</>
						);
					})}
				</table>
				<Button variant='outlined' size='small' className={classes.button}>
					<Link to='/createtransaction' className='link'>
						Add Transaction
					</Link>
				</Button>
			</Paper>
		</div>
	);
};

export default Transactions;
