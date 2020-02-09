import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';
import * as Axios from '../../config/axios';
import * as util from '../Util';
import clsx from 'clsx';
import Footer from "../dashboard/Footer";
import { HelpOutline, OndemandVideo, TrendingUp, VolumeUp } from "@material-ui/icons";

export default function StaticPageLayout({ match }) {
	const classes = useStyles();
	const [username, setUserName] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = e => {
		e.preventDefault();
		const refBy = util.getRefByFromQueryString() ? util.getRefByFromQueryString() : util.getCookie("refBy");
		Axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
			username: username,
			password: "123",
			refBy
		}).then(response => {
			util.setAccessToken(response.data.token);
			window.location.href = "/in/dashboard";
		}).catch(err => {
			console.log(err);
		});
	}

	const handleLogout = e => {
		util.clearAccessToken();
		window.location.href = "/";
	}

	const handleGoToDashboard = e => {
		window.location.href = "/in/dashboard";
	}

	Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/current`)
	  .then(response => {
		  setLoggedIn(true);
	  }).catch(err => {
		util.clearAccessToken();
		setLoggedIn(false);
	})

	return <>
		<AppBar className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography component="h1" variant="h3" color="inherit" noWrap className={classes.title}>
					<Link to="/">OffRewards</Link>
				</Typography>
			</Toolbar>
		</AppBar>
		<Container maxWidth={"xl"} className={classes.staticPageContainer}>
			<Grid component={"div"} container spacing={3} className={classes.textGrid}>
				<Grid item xs={false} sm={false} md={3} lg={3}></Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Typography variant={"h3"} paragraph component={"p"} className={classes.introText}>
						Earn Points,
						Get Rewarded!
					</Typography>
					<div className={classes.formGroup}>
						{loggedIn ?
						  <>
							  <button onClick={handleGoToDashboard} type="button"
									  className={clsx(classes.submitBtn, classes.goToDashBoardBtn)}>
								  <Link to={"/in/dashboard"}>Go To Dashboard</Link>
							  </button>
							  <button onClick={handleLogout} type="button"
									  className={clsx(classes.submitBtn, classes.logoutBtn)}>Logout
							  </button>
						  </>
						  :
						  <form onSubmit={handleLogin}>
							  <input
								autoComplete={"email"}
								name={"email"}
								type={"email"}
								placeholder={"Email address"}
								className={classes.input}
								value={username}
								onChange={e => setUserName(e.target.value)}
							  />
							  <button type={"submit"} className={classes.submitBtn}>Login Or Create Account</button>
						  </form>}
					</div>
					<Typography variant={"h5"} component={"p"} className={classes.introText}>
						Earn Money Everyday & Get $10 Free Bonus Monthly!
					</Typography>
					<Typography variant={"h6"} paragraph component={"p"} className={classes.introText}>
						You don't need to manage your password, we manage everything through your email address.
						Just enter your email address and start earning with us!
					</Typography>
				</Grid>
			</Grid>
		</Container>
		<Container maxWidth={"xl"} className={classes.paragraphContainer}>
			<Grid component={"div"} container spacing={3} className={classes.textGrid}>
				<Grid item xs={3} sm={3} md={3} lg={3} className={classes.infoGridContainer}>
					<VolumeUp className={classes.offerIcon}/>
					<h1 className={classes.paragraphTitle}>Offer Walls</h1>
					<p className={classes.paragraphContent}>
						Advertisers want to reward you for learning about their free products and services.
					</p>
				</Grid>
				<Grid item xs={3} sm={3} md={3} lg={3} className={classes.infoGridContainer}>
					<HelpOutline className={classes.surveyIcon}/>
					<h1 className={classes.paragraphTitle}>Survey Routers</h1>
					<p className={classes.paragraphContent}>
						Brands want to understand their customers and improve their products with paid surveys.
					</p>
				</Grid>
				<Grid item xs={3} sm={3} md={3} lg={3} className={classes.infoGridContainer}>
					<OndemandVideo className={classes.videoIcon}/>
					<h1 className={classes.paragraphTitle}>Video Ads</h1>
					<p className={classes.paragraphContent}>
						Advertisers will pay you to watch their videos. Discover new brands and entertainment.
					</p>
				</Grid>
				<Grid item xs={3} sm={3} md={3} lg={3} className={classes.infoGridContainer}>
					<TrendingUp className={classes.bonusIcon}/>
					<h1 className={classes.paragraphTitle}>Daily Bonuses</h1>
					<p className={classes.paragraphContent}>
						Even if you live in a country with less surveys, you can earn free daily bonuses and giveaways.
					</p>
				</Grid>
			</Grid>
		</Container>
		<Footer/>
	</>
}

const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1,
		fontFamily: "'Courgette', cursive"
	},
	appBar: {
		boxShadow: "none",
		background: "rgba(63, 81, 181, 0)",
		"& a": {
			textDecoration: "none",
			color: "white"
		},
		paddingTop: "1em",
		paddingLeft: "3em",
		paddingRight: "5em",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	staticPageContainer: {
		position: "relative",
		backgroundImage: "url(https://demos.creative-tim.com/material-kit-pro-react/static/media/office2.d57fa885.jpg)",
		backgroundSize: "cover",
		height: "100%",
		minWidth: "100%",
		alignItems: "center",
		display: "flex",
		// justifyContent: "center",
		color: "#FFF",
		"&::before": {
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			content: `''`,
			display: "block",
			zIndex: 1,
			position: "absolute",
			background: "rgba(0, 0, 0, 0.5)"
		},
		"& >div": {
			zIndex: 1,
		}
	},
	textGrid: {
		// zIndex: 1,
	},
	inputGrid: {
		// background: "white",
		// borderRadius: "6px",
	},
	introText: {
		textAlign: "center"
	},
	submitBtn: {
		background: "#9c27b0",
		border: 0,
		height: "2.5rem",
		borderRadius: "0 6px 6px 0",
		width: "15em",
		color: "white",
		fontWeight: 600,
		"& a": {
			textDecoration: "none",
			color: "inherit"
		},
		"&:hover": {
			boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)",
			backgroundColor: "#9c27b0"
		},
		"&:focus": {
			outline: "none"
		},
		"&:active": {
			background: "#9c27f0"
		}
	},
	input: {
		width: "20em",
		height: "2.5rem",
		border: 0,
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: "1em",
		marginTop: 0,
		marginBottom: 0,
		borderRadius: "6px 0 0 6px",
		"&:focus": {
			outline: "none"
		}
	},
	formGroup: {
		display: "flex",
		justifyContent: "center",
		marginTop: "1em",
		marginBottom: "1em",
	},
	goToDashBoardBtn: {
		borderRadius: "6px",
	},
	logoutBtn: {
		background: "#f50057",
		borderRadius: "6px",
		marginLeft: "1em",
		"&:hover": {
			boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)",
			backgroundColor: "#f50057"
		},
		"&:focus": {
			outline: "none"
		},
		"&:active": {
			background: "red"
		}
	},
	paragraphContainer: {
		background: "#fff",
		padding: "50px",
		borderBottom: "1px solid #e7e7e7",
		paddingLeft: "20%",
		paddingRight: "20%"
	},
	paragraphTitle: {
		marginTop: "0"
	},
	paragraphContent: {
		fontSize: "18px",
		fontWeight: "400"
	},
	infoGridContainer: {
		textAlign: "center",
		"& svg": {
			width: "4em",
			height: "4em"
		}
	},
	offerIcon: {
		color: "blue"
	},
	surveyIcon: {
		color: "green"
	},
	videoIcon: {
		color: "red"
	},
	bonusIcon: {
		color: "orange"
	}
}));
