import React from 'react';
import { BrowserRouter as Router, BrowserRouter, Link, Route, Switch } from "react-router-dom";
import MainLayout from './dashboard/MainLayout';
import SignUp from './SignUp';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge/Badge';
import AppBar from '@material-ui/core/AppBar/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Test from './Test';

export default function Redirector() {
	const classes = useStyles();
	return <BrowserRouter>
		<ul style={{marginTop: "80px"}}>
			<li><Link to={"/in"}>in</Link></li>
			<li><Link to={"/signup"}>signup</Link></li>
			<li><Link to={"/test"}>test</Link></li>
			{/*<li>*/}
			{/*	<Link to="/home">Home</Link>*/}
			{/*</li>*/}
			{/*<li>*/}
			{/*	<Link to="/topics">Topics</Link>*/}
			{/*</li>*/}
		</ul>
		{/*<AppBar className={clsx(classes.appBar, true && classes.appBarShift)}>*/}
		{/*	<Toolbar>*/}
		{/*		<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>*/}
		{/*			GaoGao*/}
		{/*		</Typography>*/}
		{/*		<IconButton color="inherit">*/}
		{/*			<Badge badgeContent={4} color="secondary">*/}
		{/*				<NotificationsIcon/>*/}
		{/*			</Badge>*/}
		{/*		</IconButton>*/}
		{/*	</Toolbar>*/}
		{/*</AppBar>*/}

		<Switch>
			<Route exact path="/in" component={MainLayout}/>
			<Route exact path="/signup" component={SignUp}/>
			<Route path="/test" component={Test}/>
			{/*<Route path="/topics" component={Test}/>*/}
		</Switch>

	</BrowserRouter>
	// return <BrowserRouter>
	// 	<div style={{ width: 1000, margin: "0 auto" }}>
	// 		<ul>
	// 			<li>
	// 				<Link to="/home">Home</Link>
	// 			</li>
	// 			<li>
	// 				<Link to="/topics">Topics</Link>
	// 			</li>
	// 		</ul>
	//
	// 		<hr/>
	// 		<Switch>
	// 			<Route exact path="/home" component={Home}/>
	// 			<Route path="/topics" component={Test}/>
	// 		</Switch>
	// 	</div>
	// </BrowserRouter>
}

function Home() {
	return <h1>Home.</h1>;
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1
	},
	appBar: {
		// zIndex: theme.zIndex.drawer + 1,
		// transition: theme.transitions.create(['width', 'margin'], {
		// 	easing: theme.transitions.easing.sharp,
		// 	duration: theme.transitions.duration.leavingScreen,
		// }),
	},
	appBarShift: {
		// marginLeft: drawerWidth,
		// width: `calc(100% - ${drawerWidth}px)`,
		// transition: theme.transitions.create(['width', 'margin'], {
		// 	easing: theme.transitions.easing.sharp,
		// 	duration: theme.transitions.duration.enteringScreen,
		// }),
	}
}));
