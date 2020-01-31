import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright';
import * as util from '../Util';
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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const classes = useStyles();
	const [credentials, setCredentials] = useState({
		username: "",
		password: ""
	});
	const [error, setError] = useState(false);
	const submitForm = e => {
		e.preventDefault();
		Axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, credentials)
		  .then(response => {
		  	util.setAccessToken(response.data.token);
		  	window.location.href = "/in/dashboard";
		  })
		  .catch(err => {
		  	console.log(err);
		  	setError(true);
		  })
	}

	return (
	  <Container maxWidth="xs">
		  <CssBaseline/>
		  <div className={classes.paper}>
			  <Avatar className={classes.avatar}>
				  <LockOutlinedIcon/>
			  </Avatar>
			  <Typography component="h1" variant="h5">
				  Sign in
			  </Typography>
			  {error && <Typography color={'error'} variant="h5">
				  Please try again
			  </Typography>}
			  <form className={classes.form} onSubmit={submitForm}>
				  <TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
					onChange={e => setCredentials({
						...credentials,
						username: e.target.value
					})}
				  />
				  <TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					autoComplete="current-password"
					onChange={e => setCredentials({
						...credentials,
						password: e.target.value
					})}
				  />
				  <FormControlLabel
					control={<Checkbox value="remember" color="primary"/>}
					label="Remember me"
				  />
				  <Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				  >
					  Sign In
				  </Button>
				  <Grid container>
					  <Grid item xs>
						  <Link href="#" variant="body2">
							  Forgot password?
						  </Link>
					  </Grid>
					  <Grid item>
						  <Link href="/signup" variant="body2">
							  {"Don't have an account? Sign Up"}
						  </Link>
					  </Grid>
				  </Grid>
			  </form>
		  </div>
		  <Box mt={8}>
			  <Copyright/>
		  </Box>
	  </Container>
	);
}
