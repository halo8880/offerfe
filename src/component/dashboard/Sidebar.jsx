import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Bookmark from '@material-ui/icons/Bookmark';
import Settings from '@material-ui/icons/Settings';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
		<Link to={`${match.url}/offerwall`}>
			<ListItem button>
				<ListItemIcon>
					<Bookmark/>
				</ListItemIcon>
				<ListItemText primary="Offerwalls"/>
			</ListItem>
		</Link>
		<Link to={`${match.url}/claim`}>
			<ListItem button>
				<ListItemIcon>
					<AttachMoney/>
				</ListItemIcon>
				<ListItemText primary="Claim Prizes"/>
			</ListItem>
		</Link>
		<Link to={`${match.url}/setting`}>
			<ListItem button>
				<ListItemIcon>
					<Settings/>
				</ListItemIcon>
				<ListItemText primary="Settings"/>
			</ListItem>
		</Link>
	</div>
}
