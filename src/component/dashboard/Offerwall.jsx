import React, { useState, } from 'react';
import * as Axios from '../../config/axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

function Offerwall({match}) {
	const classes = useStyles();

	return <Grid container spacing={4}>
		<Grid item xs={12} sm={6} md={3}>
			<Link to={`${match.url}/adworkmedia`}>
				<Card className={classes.card}>
					<CardMedia
					  className={classes.cardMedia}
					  image="https://source.unsplash.com/random"
					  title="Adworkmedia"
					/>
					<CardContent className={classes.cardContent}>
						<Typography variant="h5" component="h2">
							Adworkmedia
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</Grid>

	</Grid>
}

const useStyles = makeStyles(theme => ({
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
	}
}));

export default withRouter(Offerwall);
