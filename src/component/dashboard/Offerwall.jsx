import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

function Offerwall({ match, setPageName }) {
	const classes = useStyles();
	setPageName("Offerwall");
	return <>
		<Paper className={classes.sectionHeader}>
			<Typography component="h3" variant="h5">
				Offers from Our Trusted Partners
			</Typography>
		</Paper>
		<Grid container spacing={4}>
			<Grid item xs={12} sm={6} md={3}>
				<Link to={`${match.url}/adworkmedia`}>
					<Card className={classes.card}>
						<CardMedia
						  className={classes.cardMedia}
						  image="/adworkmedia.jpg"
						  title="Adworkmedia"
						/>
						<CardContent className={classes.cardContent}>
							<Typography variant="h5" component="h5">
								Adworkmedia
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</Grid>
		</Grid>
	</>
}

const useStyles = makeStyles(theme => ({
	sectionHeader: {
		padding: "5px 5px 5px 10px",
		marginBottom: "15px",
		backgroundColor: "#5f5f5f",
		color: "white"
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
	}
}));

export default withRouter(Offerwall);
