import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as Axios from '../../config/axios';

export default function Offers() {
	const classes = useStyles();
	const [fetchData, setFetchData] = useState({
		items: [],
		loading: true
	});
	useEffect(() => {
		setFetchData({ loading: true });
		Axios.get(process.env.REACT_APP_API_BASE_URL + "/adworkmedia/offer")
		  .then(response => {
			  setFetchData({
				  loading: false,
				  items: response.data
			  });
		  })
		  .catch(error => {
			  console.log(error);
			  setFetchData({
				  items: [],
				  loading: false
			  });
		  });
	}, []);
	return <Grid container spacing={3}>
		{fetchData.loading && <CircularProgress className={classes.spin} variant="indeterminate"/>}
		{fetchData.items && fetchData.items.map(item =>
		  <Grid key={item.campaign_id} item xs={12} md={4} lg={4}>
			  <Card className={classes.card}>
				  <CardHeader
					className={classes.cardHeader}
					avatar={
						<Avatar
						  src={item.image}
						  aria-label="recipe"
						  className={classes.avatar}
						/>
					}
					titleTypographyProps={{ variant: "h6" }}
					title={item.campaign_name}
					subheader={item.teaseText}
				  />
				  <CardContent className={classes.cardContent}>
					  <Typography className={classes.contentDesc}>
						  {item.teaseDesc}
					  </Typography>
					  <Divider/>
					  <div className={classes.contentLine}>
						  <Typography className={classes.contentLineLabel} component="div">
							  Incent
						  </Typography>
						  <Typography className={classes.contentLineText} component="div">
							  {item.incent}
						  </Typography>
					  </div>
					  <Divider/>
					  <div className={classes.contentLine}>
						  <Typography className={classes.contentLineLabel} component="div">
							  Target
						  </Typography>
						  <Typography className={classes.contentLineText} component="div">
							  {item.device_type}
						  </Typography>
					  </div>
					  <Divider/>
					  <div className={classes.contentLine}>
						  <Typography className={classes.contentLineLabel} component="div">
							  Geos
						  </Typography>
						  <Typography className={classes.contentLineText} component="div">
							  {item.countries}
						  </Typography>
					  </div>
					  <Divider/>
					  <div className={classes.contentLine}>
						  <Typography className={classes.contentLineLabel} component="div">
							  CPA
						  </Typography>
						  <Typography className={clsx(classes.contentLineText, classes.money)} component="div">
							  {item.payout}
						  </Typography>
					  </div>
				  </CardContent>
				  <CardActions>
					  <Button variant="contained" className={classes.btnView} size="large" color="primary">
						  View
					  </Button>
				  </CardActions>
			  </Card>
		  </Grid>)}
	</Grid>
}
const useStyles = makeStyles(theme => ({
	  spin: {
		  display: "flex",
		  justifyContent: "center",
		  marginBottom: "40px",
		  marginTop: "40px"
	  },
	  cardHeader: {
		  padding: "16px 16px 5px 16px"
	  }
	  ,
	  contentDesc: {
		  paddingBottom: "10px"
	  }
	  ,
	  avatar: {
		  borderRadius: "0",
		  width:
			"64px",
		  height:
			"64px"
	  }
	  ,
	  card: {
		  height: '100%',
		  display:
			'flex',
		  flexDirection:
			'column',
	  }
	  ,
	  cardMedia: {
		  paddingTop: '56.25%', // 16:9
	  }
	  ,
	  cardContent: {
		  flexGrow: 1,
	  }
	  ,
	  contentLine: {
		  display: "flex",
		  paddingBottom:
			"5px",
		  paddingTop:
			"5px"
	  }
	  ,
	  contentLineLabel: {
		  flex: "1 1",
		  fontWeight:
			"600",
		  fontSize:
			"0.8rem"
	  }
	  ,
	  contentLineText: {
		  flex: "2 1",
		  fontSize:
			"0.8rem"
	  }
	  ,
	  money: {
		  color: "blue",
		  fontSize:
			"1.5rem"
	  }
	  ,
	  btnView: {
		  width: "100%",
		  // backgroundColor: "orange"
	  }
  }))
;
