import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar/index';
import Button from '@material-ui/core/Button/index';
import CssBaseline from '@material-ui/core/CssBaseline/index';
import TextField from '@material-ui/core/TextField/index';
import Link from '@material-ui/core/Link/index';
import Grid from '@material-ui/core/Grid/index';
import Box from '@material-ui/core/Box/index';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography/index';
import { makeStyles } from '@material-ui/core/styles/index';
import Container from '@material-ui/core/Container/index';
import { debounce } from '../Util';
import Copyright from '../Copyright';
import * as Axios from '../../config/axios';

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const [error, setError] = useState(false);
	const classes = useStyles();
	const initialInfo = {
		username: "",
		password: "",
		paypal: ""
	};
	const [info, setInfo] = useState(initialInfo);
	const submitForm = e => {
		Axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, info)
		  .then(response => {
			  window.location.href = "/signin";
		  }).catch(err => {
			setError(true);
		});
		e.preventDefault();
	}
	return (
	  <Container component="main" maxWidth="xs">
		  <CssBaseline/>
		  <div className={classes.paper}>
			  <Avatar className={classes.avatar}>
				  <LockOutlinedIcon/>
			  </Avatar>
			  <Typography component="h1" variant="h5">
				  Sign up
			  </Typography>
			  {error && <Typography color={'error'} variant="h5">
				  Please try again
			  </Typography>}
			  <form className={classes.form} onSubmit={submitForm}>
				  <Grid container spacing={2}>
					  <Grid item xs={12}>
						  <TextField
							variant="outlined"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							type="email"
							onChange={e => debounce(setInfo({
								...info,
								username: e.target.value
							}), 100)}
						  />
					  </Grid>
					  <Grid item xs={12}>
						  <TextField
							variant="outlined"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={e => debounce(setInfo({
								...info,
								password: e.target.value
							}), 100)}
						  />
					  </Grid>
					  <Grid item xs={12}>
						  <TextField
							variant="outlined"
							fullWidth
							name="paypal"
							label="Paypal (Optional)"
							id="paypal"
							onChange={e => debounce(setInfo({
								...info,
								paypal: e.target.value
							}), 100)}
						  />
					  </Grid>
				  </Grid>
				  <Button
					type="Submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
					onClick={submitForm}
				  >
					  Sign Up
				  </Button>
				  <Grid container justify="flex-end">
					  <Grid item>
						  <Link href="/signin" variant="body2">
							  Already have an account? Sign in
						  </Link>
					  </Grid>
				  </Grid>
			  </form>
		  </div>
		  <Box mt={5}>
			  <Copyright/>
		  </Box>
	  </Container>
	);
}
