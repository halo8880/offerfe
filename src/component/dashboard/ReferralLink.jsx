import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Title from './Title';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Info from '@material-ui/icons/InfoOutlined';

export default function ReferralLink({ setPageName, userId }) {
	setPageName("Referral Link");
	const classes = useStyles();
	return <Grid container spacing={3}>
		<Grid item xs={12} md={12} lg={12}>
			<Paper className={clsx(classes.paperFixedHeight, classes.paper)}>
				<form onSubmit={() => {
				}}>

					<Title className={classes.refTitle}>Refer to earn more &nbsp;</Title>
					<div className={classes.refLinkInfoIcon}>
						<Tooltip
						  title="You can earn points by sharing these links on the web. Get a referral bonus for every user that
						signs up.
						You will also earn the equivalent of 10% of their points from converting offers and surveys for
						life." placement="right"><Info/></Tooltip>
					</div>
					<Divider className={classes.divider}/>
					<div className={classes.paperDesc}>
						<Typography paragraph>
							Earn points by completing paid surveys, free offers, or sharing us with your friends.
							Earn enough points and you can claim free gift cards or cash.
						</Typography>
						<Typography paragraph>
							We use 14-days-cookie to make sure you get your referral
							as long as they register after following your referral link within 14 days.
						</Typography>
					</div>
					<Grid container spacing={3} className={classes.paymentGrid}>
						<Grid item xs={10} md={10} lg={10}>
							<TextField
							  variant={'outlined'}
							  readOnly
							  label={"Your referral link"}
							  className={classes.paypalInput}
							  value={`${process.env.REACT_APP_FRONTEND_BASE_URL}?refBy=${userId}`}
							/>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Grid>
	</Grid>
}
const useStyles = makeStyles(theme => ({
	refLinkInfoIcon: {
		display: "inline-block",
		paddingTop: "0.2em"
	},
	paperFixedHeight: {
		minHeight: "260px"
	},
	paper: {
		width: "100%",
		padding: "1em"
	},
	paypalInput: {
		width: "100%",
		marginLeft: "2px"
	},
	inputLabel: {
		fontWeight: 500
	},
	paymentGrid: {
		marginLeft: "2em"
	},
	paperDesc: {
		padding: "unset 2em 2em 2em"
	},
	refTitle: {
		display: "inline-block"
	},
	divider: {
		marginBottom: "2rem"
	}
}));
