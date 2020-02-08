import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Title from './Title';
import * as Axios from '../../config/axios';

function Offerwall({ match, setPageName }) {
	const classes = useStyles();
	const [listWalls, setListWalls] = useState([]);
	setPageName("Offerwall");

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/network/wall`)
		  .then(response => {
			  setListWalls(response.data);
		  });

	}, []);

	return <Grid container spacing={3} className={classes.offerWallGrid}>
		<Grid item xs={12} md={12} lg={12}>
			<Paper className={classes.sectionHeader}>
				<Title component="h3" variant="h5">
					Offers from Our Trusted Partners
				</Title>
				<Divider className={classes.divider}/>
				<Grid container spacing={3} className={classes.offerWallGrid}>
					{listWalls.map(wall =>
					  <Grid item xs={12} sm={6} md={3} className={classes.offerWallGridItem}>
						<Link to={`${match.url}/${wall.networkName}`}>
							<Card className={classes.card}>
								<CardMedia
								  className={classes.cardMedia}
								  image={wall.image}
								  title={wall.networkName}
								/>
								<CardContent className={classes.cardContent}>
									<Typography variant="h5" component="h5">
										{wall.networkName}
									</Typography>
								</CardContent>
							</Card>
						</Link>
					</Grid>)}
				</Grid>
			</Paper>
		</Grid>
	</Grid>
}

const useStyles = makeStyles(theme => ({
	offerWallGrid: {
		margin: "2em"
	},
	sectionHeader: {
		padding: "5px 5px 5px 10px",
		// marginBottom: "15px",
		minHeight: "290px",
		width: "100%"
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		padding: "5px 0px 5px 0px !important",
		flexGrow: 1,
		display: "flex",
		justifyContent: "center"
	},
	divider: {
		marginBottom: "2rem"
	},
	offerWallGridItem: {
		minHeight: "200px"
	}
}));

export default withRouter(Offerwall);
