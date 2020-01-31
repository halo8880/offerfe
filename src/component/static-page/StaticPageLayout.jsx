import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Link, Route } from 'react-router-dom';

export default function StaticPageLayout({ match }) {
	const classes = useStyles();
	return <div>
		<AppBar className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
					<Link to="/">VietNamAds</Link>
				</Typography>
				<Button color="inherit"><Link to={`/signin`}>Login</Link></Button>
				<Button color="inherit"><Link to={`/signup`}>Register</Link></Button>
			</Toolbar>
		</AppBar>
		<div style={{marginTop: "100px"}}>
			<Route path={`/signup`} component={SignUp}/>
			<Route path={`/signin`} component={SignIn}/>
		</div>
	</div>
}
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1,
	},
	appBar: {
		"& a": {
			textDecoration: "none",
			color: "white"
		},
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}
}));
function Home() {
	return <div>sadkjasdljsadljsad</div>
}
