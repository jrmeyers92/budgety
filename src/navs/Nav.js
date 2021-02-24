import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#333",
	},

	title: {
		fontFamily: "Courgette, cursive",
		flexGrow: 1,
		[theme.breakpoints.down("sm")]: {
			flexGrow: 1,
		},
	},
	iconButton: {
		color: "white",
	},
	name: {
		fontSize: 16,
		marginLeft: 4,
	},
}));

const Nav = ({ userName }) => {
	const classes = useStyles();
	return (
		<div>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<Typography className={classes.title} variant='h5' component='h1'>
						Bugetry
					</Typography>
					<IconButton className={classes.iconButton}>
						<AccountCircleIcon fontSize='large' />
						<span className={classes.name}>{userName}</span>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Nav;
