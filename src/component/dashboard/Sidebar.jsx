import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	sidebar: {
		"& a": {
			textDecoration: "none",
			color: "inherit"
		}
	}
}));

export function SideBar({ match }) {
	const classes = useStyles();
	// const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return <div className={classes.sidebar}>
		<Link to={`${match.url}/dashboard`}>
			<ListItem button>
				<ListItemIcon>
					<DashboardIcon/>
				</ListItemIcon>
				<ListItemText primary="Dashboard"/>
			</ListItem>
		</Link>
		<Link to={`${match.url}/offers`}>
			<ListItem button>
				<ListItemIcon>
					<ShoppingCartIcon/>
				</ListItemIcon>
				<ListItemText primary="Offer Markerplace"/>
			</ListItem>
		</Link>
	</div>
}
