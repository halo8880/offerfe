import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import * as Axios from '../../config/axios';
import * as util from '../Util';
import clsx from 'clsx';
import Copyright from "../Copyright";
import Term from "../dashboard/static-pages/Term";
import Default from "../dashboard/static-pages/Default";

function StaticPageLayout({ match }) {
	const classes = useStyles();
	const staticUrl = "static";

	const handleScrollTop = () => {
		document.body.scrollTop = 0;
	}

	return <>
		<AppBar className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
					<Link to="/">OffRewards</Link>
				</Typography>
				<div className={classes.appBarRight}>
					<Button color="inherit">Login</Button>
					<Typography component="p" variant="body1" color="inherit" noWrap className={classes.title}>
						<Link to="/">Blog</Link>
					</Typography>
					<Typography component="p" variant="body1" color="inherit" noWrap className={classes.title}>
						<Link to="/">About us</Link>
					</Typography>
				</div>
			</Toolbar>
		</AppBar>
		<Container className={classes.middlePart}>
			<Switch>
				<Route path={`${match.path}/term`}>
					<Term />
				</Route>
				<Route path={`${match.path}/policy`}>
					this is Policy
				</Route>
				<Route path="/">
					<Default />
				</Route>
			</Switch>
		</Container>
		<Container className={classes.footerContainer}>
			<Grid component={"div"} container spacing={3} className={classes.textGrid}>
				<Grid item xs={12} sm={4} md={4} lg={4}>
					<Typography variant={"h5"} gutterBottom>
						Company
					</Typography>
					<div className={classes.footerInfoContainer}>
						<div className={classes.companyInfo}>
							<div>SAS POINTSPRIZES</div>
							<div>8 Rue Des Remparts</div>
							<div>Le Boulou</div>
							<div>66160</div>
							<div>France</div>
						</div>
						<div className={classes.registrationInfo}>
							<div>Company Registration Number:</div>
							<div>830 646 766 R.C.S. Perpignan</div>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={4} md={4} lg={4}>
					<Typography variant={"h5"} gutterBottom>
						Learn More
					</Typography>
					<Grid component={"div"} container spacing={3} className={classes.textGrid}>
						<Grid item xs={6} sm={6} md={6} lg={6}>
							<div className={classes.footerInfoContainer}>
								<Link to={`${staticUrl}/term`} className={classes.footerLink}>Term Of Use</Link>
								<Link to={`${staticUrl}/policy`} className={classes.footerLink}>Privacy Policy</Link>
								<Link to={`${staticUrl}/offers`} className={classes.footerLink}>Contact Us</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Help Center</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Video Tutorials</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Earnings Disclaimer</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Brand Guidelines</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Press Coverage</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Advertise Here</Link>
							</div>
						</Grid>
						<Grid item xs={6} sm={6} md={6} lg={6}>
							<div className={classes.footerInfoContainer}>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Affiliate Program</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Paid Surveys</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Newsletter</Link>
								<Link to={`${match.url}/offers`} className={classes.footerLink}>Payment Proof</Link>
							</div>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={4} md={4} lg={4}>
					<Typography variant={"h5"} gutterBottom>
						Latest Article
					</Typography>
					<div className={classes.footerInfoContainer}>
						<div className={classes.articleContainer}>
							<div className={classes.articleName}>
								Tax Planning: Optimize And Reduce Your Taxes
							</div>
							<div className={classes.articleDate}>7th February 2020</div>
						</div>
						<div className={classes.articleContainer}>
							<div className={classes.articleName}>
								Tax Planning For Business Owners
							</div>
							<div className={classes.articleDate}>7th February 2020</div>
						</div>
						<div className={classes.articleContainer}>
							<div className={classes.articleName}>
								Final Fantasy Brave Exvius Guide
							</div>
							<div className={classes.articleDate}>7th February 2020</div>
						</div>
					</div>
					<div className={classes.copyRight}>
						<Copyright/>
					</div>
				</Grid>
			</Grid>
		</Container>
	</>
}

export default withRouter(StaticPageLayout);
const useStyles = makeStyles(theme => ({
	title: {
		flexGrow: 1,
		fontFamily: "'Courgette', cursive"
	},
	appBar: {
		boxShadow: "none",
		background: "#e7e7e7",
		"& a": {
			textDecoration: "none",
			color: "black"
		},
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		padding: "0 40px"
	},
	middlePart: {
		maxWidth: "100%",
		margin: "60px 0 0 0",
		padding: "0"
	},
	footerContainer: {
		background: "#f8f8f8",
		color: "#333",
		maxWidth: "100%",
		margin: "0",
		padding: "50px 30%"
	},
	footerInfoContainer: {
		display: "grid"
	},
	footerLink: {
		color: "#337ab7",
		textDecoration: "none",
		"&:hover": {
			textDecoration: "underline"
		},
		fontSize: "14px"
	},
	copyRight: {
		"& p": {
			position: "unset",
			textAlign: "left"
		}
	},
	companyInfo: {
		fontSize: "14px",
		fontWeight: "bold"
	},
	registrationInfo: {
		fontSize: "13px",
		paddingTop: "8px"
	},
	articleContainer: {
		marginBottom: "12px",
		fontSize: "14px"
	},
	articleName: {
		color: "#337ab7",
		fontWeight: "bold"
	},
	articleDate: {
		color: "#888888"
	},
	appBarRight: {
		display: "flex",
		color: "black",
		alignItems: "center",
		"& button": {
			background: "#5cb85c",
			marginRight: "8px"
		},
		"& p": {
			marginRight: "8px",
			"&:hover": {
				color: "#fff"
			}
		}
	}
}));
