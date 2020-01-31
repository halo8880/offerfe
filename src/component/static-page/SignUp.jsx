import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar/index';
import Button from '@material-ui/core/Button/index';
import CssBaseline from '@material-ui/core/CssBaseline/index';
import TextField from '@material-ui/core/TextField/index';
import FormControlLabel from '@material-ui/core/FormControlLabel/index';
import Link from '@material-ui/core/Link/index';
import Grid from '@material-ui/core/Grid/index';
import Box from '@material-ui/core/Box/index';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography/index';
import { makeStyles } from '@material-ui/core/styles/index';
import Container from '@material-ui/core/Container/index';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { debounce } from '../Util';
import Copyright from '../Copyright';


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
	const classes = useStyles();
	const initialInfo = {
		role: "PUBLISHER",
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		skype: ""
	};
	const [info, setInfo] = useState(initialInfo);
	const submitForm = e => {
		console.log(info);
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
			  <form className={classes.form} onSubmit={submitForm}>
				  <Grid container spacing={2}>
					  <Grid item xs={12} sm={12}>
						  <FormControl component="fieldset">
							  <FormLabel component="legend">You are</FormLabel>
							  <RadioGroup aria-label="role" value={info.role} name="role"
										  onChange={e => setInfo({
											  ...info,
											  role: e.target.value
										  })}>
								  <FormControlLabel value="PUBLISHER" control={<Radio/>} label="Publisher"/>
								  <FormControlLabel value="ADVERTISER" control={<Radio/>} label="Advertiser"/>
							  </RadioGroup>
						  </FormControl>
					  </Grid>
					  <Grid item xs={12} sm={6}>
						  <TextField
							autoComplete="fname"
							name="firstName"
							variant="outlined"
							required
							fullWidth
							id="firstName"
							label="First Name"
							autoFocus
							onChange={e => debounce(setInfo({
								...info,
								firstName: e.target.value
							}), 500)}
						  />
					  </Grid>
					  <Grid item xs={12} sm={6}>
						  <TextField
							variant="outlined"
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							autoComplete="lname"
							onChange={e => debounce(setInfo({
								...info,
								lastName: e.target.value
							}), 500)}
						  />
					  </Grid>
					  <Grid item xs={12}>
						  <TextField
							variant="outlined"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							onChange={e => debounce(setInfo({
								...info,
								username: e.target.value
							}), 500)}
						  />
					  </Grid>
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
								email: e.target.value
							}), 500)}
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
							}), 500)}
						  />
					  </Grid>
					  <Grid item xs={12}>
						  <TextField
							variant="outlined"
							required
							fullWidth
							name="skype"
							label="Skype ID"
							id="skype"
							onChange={e => debounce(setInfo({
								...info,
								skype: e.target.value
							}), 500)}
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
