import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from './dashboard/MainLayout';
import SignUp from './static-page/SignUp';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Test from './Test';
import StaticPageLayout from './static-page/StaticPageLayout';

export default function Redirector() {
	// const classes = useStyles();

	return <BrowserRouter>
		<Switch>
			<Route path="/in">
				<MainLayout/>
			</Route>
			{/*<Route path="/signup" component={SignUp}/>*/}
			<Route path="/test" component={Test}/>
			<Route path="/" component={StaticPageLayout}/>
		</Switch>
	</BrowserRouter>
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
