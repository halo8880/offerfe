import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

export default function Copyright() {
	const classes = useStyles();
	return (
	  <Typography className={classes.copyright} variant="body2" color="textSecondary" align="center">
		  {'Copyright © '}
		  <Link color="inherit" href={`${process.env.REACT_APP_FRONTEND_BASE_URL}`}>
			  OffRewards.com
		  </Link>{' '}
		  {new Date().getFullYear()}
		  {'.'}
	  </Typography>
	);
}
const useStyles = makeStyles(theme => ({
	copyright: {
		position: "absolute",
		bottom: "10px",
		right: "auto",
		left: "auto"
	}
}));
