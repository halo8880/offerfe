import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PeopleOutlined from '@material-ui/icons/PeopleOutlined';
import DoneOutlined from '@material-ui/icons/DoneOutlined';
import PaymentOutlined from '@material-ui/icons/PaymentOutlined';
import AttachMoney from '@material-ui/icons/AttachMoneyOutlined';
import Chart from './Chart';
import RecentLeadNumber from './RecentLeadNumber';
import RecentLeads from './RecentLeads';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as Axios from '../../config/axios';

export default function Dashboard({ setPageName }) {
	const classes = useStyles();
	const [dashboardData, setDashboardData] = useState({
		userInfo: {},
		incomeChartInfos: [],
		top10LatestLeadOffers: [],
		totalLeadThisMonth: 0
	});

	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	setPageName("Dashboard");
	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/dashboard`)
		  .then(response => {
			  setDashboardData(response.data);
		  });
	}, []);


	return <Grid container spacing={3}>
		<Grid item xs={12} md={12} lg={12}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={6} lg={3}>
					<Paper className={clsx(classes.pointPaper, classes.earnedPoint)}>
						<DoneOutlined className={classes.pointPaperIcon}/>
						<div className={classes.pointPaperText}>
							<Typography variant={"h4"}>{dashboardData.userInfo.point ? dashboardData.userInfo.point : 0}</Typography>
							<Typography>Earned Point</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={6} md={6} lg={3}>
					<Paper className={clsx(classes.pointPaper, classes.refPoint)}>
						<PeopleOutlined className={classes.pointPaperIcon}/>
						<div className={classes.pointPaperText}>
							<Typography variant={"h4"}>{dashboardData.userInfo.refPoint ? dashboardData.userInfo.refPoint : 0}</Typography>
							<Typography>Referral Point</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={6} md={6} lg={3}>
					<Paper className={clsx(classes.pointPaper, classes.spentPoint)}>
						<PaymentOutlined className={classes.pointPaperIcon}/>
						<div className={classes.pointPaperText}>
							<Typography variant={"h4"}>{dashboardData.userInfo.spentPoint ? dashboardData.userInfo.spentPoint : 0}</Typography>
							<Typography>Spent Point</Typography>
						</div>
					</Paper>
				</Grid>
				<Grid item xs={6} md={6} lg={3}>
					<Paper className={clsx(classes.pointPaper, classes.availPoint)}>
						<AttachMoney className={classes.pointPaperIcon}/>
						<div className={classes.pointPaperText}>
							<Typography variant={"h4"}>{dashboardData.userInfo.availablePoint ? dashboardData.userInfo.availablePoint : 0}</Typography>
							<Typography>Available Point</Typography>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
		<Grid item xs={12} md={8} lg={9}>
			<Paper className={fixedHeightPaper}>
				<Chart chartData={dashboardData.incomeChartInfos}/>
			</Paper>
		</Grid>
		<Grid item xs={12} md={4} lg={3}>
			<Paper className={clsx(fixedHeightPaper, classes.recentLeadNumber)}>
				<RecentLeadNumber/>
			</Paper>
		</Grid>
		<Grid item xs={12}>
			<Paper className={classes.paper}>
				<RecentLeads leads={dashboardData.top10LatestLeadOffers}/>
			</Paper>
		</Grid>
	</Grid>
}

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
	recentLeadNumber: {
		justifyContent: "space-between"
	},
	pointPaper: {
		minHeight: "7em",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		color: "white"
	},
	pointPaperText: {
		fontWeight: 600
	},
	pointPaperIcon: {
		width: "3em",
		height: "3em"

	},
	earnedPoint: {
		backgroundColor: "#337ab7"
	},
	refPoint: {
		backgroundColor: "#5cb85c"
	},
	spentPoint: {
		backgroundColor: "#f0ad4e"
	},
	availPoint: {
		backgroundColor: "#d9534f"
	},

}));

