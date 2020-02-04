import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import clsx from 'clsx';
import * as Axios from '../../config/axios';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Setting({ setPageName }) {
	const classes = useStyles();
	const [paypal, setPaypal] = React.useState("");
	const [openSnackbar, setOpenSnackbar] = React.useState(false);

	const handleOpenSnackbar = e => {
		setOpenSnackbar(true);
	};
	const handleCloseSnackbar = e => {
		setOpenSnackbar(false);
	};

	const submitChangePaypal = e => {
		console.log(paypal);
		e.preventDefault();
		Axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/update-paypal`, { newPaypalInfo: paypal })
		  .then(res => handleOpenSnackbar());
	}
	const handlePaypalChange = e => {
		setPaypal(e.target.value);
	}

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/current`)
		  .then(response => {
			  setPaypal(response.data.paypal);
		  })
	}, []);


	setPageName("Account Setting");
	return (
	  <>
		  <Grid container spacing={3}>
			  <Grid item xs={12} md={12} lg={12}>
				  <Paper className={clsx(classes.paperFixedHeight, classes.paper)}>
					  <form onSubmit={submitChangePaypal}>
						  <Title>Setup payment methods</Title>
						  <Typography className={classes.paperDesc}>
							  Set up the payment information so that we can pay you
						  </Typography>
						  <Grid container spacing={3} className={classes.paymentGrid}>
							  <Grid item xs={12} md={4} lg={4}>
								  <Typography className={classes.inputLabel} component={"div"}
											  for="paypal">Paypal:</Typography>
								  <TextField
									className={classes.paypalInput}
									id="paypal"
									value={paypal}
									type={"email"}
									placeholder={"abc@gmail.com"}
									helperText="Enter your paypal email"
									onChange={handlePaypalChange}
								  />
							  </Grid>
						  </Grid>
						  <Grid container spacing={3} className={classes.paymentGrid}>
							  <Grid item xs={12} md={4} lg={4}>
								  <Button type={"submit"} variant={"contained"} color={"primary"}>Update
									  Payment</Button>
							  </Grid>
						  </Grid>
					  </form>
				  </Paper>
			  </Grid>
		  </Grid>
		  <Snackbar
			open={openSnackbar}
			autoHideDuration={6000}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			onClose={handleCloseSnackbar}
		  >
			  <Alert severity="success">
				  Please check your mailbox and follow the link to confirm your change!
			  </Alert>
		  </Snackbar>
	  </>
	)
}
const useStyles = makeStyles(theme => ({
	paperFixedHeight: {
		// height: "260px"
	},
	paper: {
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
		marginTop: "1em",
		marginLeft: "2em"
	},
	paperDesc: {
		fontWeight: 600,
		paddingLeft: "2em"
	},
	deleteTitle: {
		color: "red"
	}
}));
