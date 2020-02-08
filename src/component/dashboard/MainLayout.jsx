import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { SideBar } from './Sidebar.jsx';
import Dashboard from './Dashboard.jsx';
import Offers from './Offers';
import Copyright from '../Copyright';
import Offerwall from './Offerwall';
import OfferwallWork from './OfferwallWork';
import Button from '@material-ui/core/Button';
import * as util from '../Util';
import * as Axios from '../../config/axios';
import ClaimPrize from './ClaimPrize';
import Setting from './Setting';
import ReferralLink from './ReferralLink';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		'& a': {
			textDecoration: "none",
			color: "inherit"
		}
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		fontWeight: 600,
		flexGrow: 1,
		fontFamily: "'Courgette', cursive",
		fontSize: "2rem",
		"& a": {
			textDecoration: "none",
			color: "inherit"
		}
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
		minHeight: "100%",
		position: "relative"
	},
	pointBtn: {
		width: "10em",
		marginRight: "2em"
	},
}));

function MainLayout({ match }) {
	const classes = useStyles();
	const [pageName, setPageName] = React.useState("");
	const [open, setOpen] = React.useState(true);
	const [point, setPoint] = React.useState(0);
	const [userId, setUserId] = React.useState("");
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/current`)
	  .then(response => {
		  setPoint(response.data.point && response.data.point !== 'null' ? response.data.point : point);
		  setUserId(response.data.id && response.data.id !== 'null' ? response.data.id : userId);
	  }).catch(err => {
		util.clearAccessToken();
		window.location.href = "/";
	})

	return (
	  <div className={classes.root}>
		  <CssBaseline/>
		  <AppBar className={clsx(classes.appBar, open && classes.appBarShift)}>
			  <Toolbar className={classes.toolbar}>
				  <IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
				  >
					  <MenuIcon/>
				  </IconButton>
				  <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
					  {pageName}
				  </Typography>
				  <Button className={classes.pointBtn} variant="contained">{point} POINT</Button>
				  <Button variant="contained" color="secondary"
						  onClick={() => {
							  util.clearAccessToken();
							  window.location.href = "/";
						  }}
				  >Logout</Button>
			  </Toolbar>
		  </AppBar>
		  <Drawer
			variant="permanent"
			classes={{
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={open}
		  >
			  <div className={classes.toolbarIcon}>
				  <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
					  <Link to="/">OffRewards</Link>
				  </Typography>
				  <IconButton onClick={handleDrawerClose}>
					  <ChevronLeftIcon/>
				  </IconButton>
			  </div>
			  <Divider/>
			  <List><SideBar match={match}/></List>
			  <Divider/>
		  </Drawer>
		  <main className={classes.content}>
			  <div className={classes.appBarSpacer}/>
			  <Container maxWidth="lg" className={classes.container}>
				  <Switch>
					  <Route path={`${match.path}/offers`}>
						  <Offers setPageName={setPageName}/>
					  </Route>
					  <Route path={`${match.path}/dashboard`}>
						  <Dashboard setPageName={setPageName}/>
					  </Route>
					  <Route path={`${match.path}/offerwall/:net/:netId`}>
						  <OfferwallWork setPageName={setPageName}/>
					  </Route>
					  <Route path={`${match.path}/offerwall`}>
						  <Offerwall setPageName={setPageName}/>
					  </Route>
					  <Route path={`${match.path}/claim`}>
						  <ClaimPrize setPageName={setPageName}/>
					  </Route>
					  <Route path={`${match.path}/setting`}>
						  <Setting setPageName={setPageName}/>
					  </Route>
					  <Route path={`${match.path}/referral`}>
						  <ReferralLink userId={userId} setPageName={setPageName}/>
					  </Route>
				  </Switch>

				  <Box pt={4}>
					  <Copyright/>
				  </Box>
			  </Container>
		  </main>
	  </div>
	);
}

export default withRouter(MainLayout);
