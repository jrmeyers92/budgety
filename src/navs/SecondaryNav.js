import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
	appBar: {
		marginTop: "8.8vh",
		backgroundColor: "rgb(247,247,247)",
		boxShadow: "none",
	},
	link: {
		textDecoration: "none",
	},
}));

const SecondaryNav = () => {
	const classes = useStyles();
	return (
		<div>
			<AppBar position='relative' className={classes.appBar}>
				<Toolbar align='center'>
					<Grid container direction='row' justify='center' alignItems='center'>
						<Button>Transactions</Button>
						<Button>Budgets</Button>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default SecondaryNav;
