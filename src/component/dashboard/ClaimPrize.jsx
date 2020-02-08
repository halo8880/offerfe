import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import * as Axios from '../../config/axios';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import * as util from '../Util';

function ClaimPrize({ match, setPageName }) {
	const classes = useStyles();
	const initialPrizeValue = { valueId: "", point: 0 };
	const [selectedPrizeValue, setSelectedPrizeValue] = useState(initialPrizeValue);
	const [selectedPrize, setSelectedPrize] = useState({});
	const [prizeTypes, setPrizeTypes] = useState([]);

	setPageName("Claim Prize");

	const handleSubmit = e => {
		const data = {
			prizeId: selectedPrize.id,
			prizeValueId: selectedPrizeValue.valueId
		}
		Axios.post(`${process.env.REACT_APP_API_BASE_URL}/prize/request`, data)
		  // .then()
	}

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/prize/prize-types`)
		  .then(response => {
			  setPrizeTypes(response.data);
		  });
	}, []);
	useEffect(() => {
		if (prizeTypes.length > 0) {
			setSelectedPrize(prizeTypes[0]);
		}
	}, [prizeTypes]);
	return <>
		<Paper className={classes.selectPrize}>
			<Title>Prize Goal</Title>
			<Divider className={classes.divider}/>
			<Grid container spacing={4}>
				<Grid item xs={6} md={3} lg={3}>
					<img className={classes.prizeGoalImage} src={selectedPrize.image}/>
				</Grid>
				<Grid item xs={12} md={4} lg={4}>
					{selectedPrize.prizeDesc && selectedPrize.prizeDesc.split('\n').map(paragraph =>
					  <Typography
						key={util.uuidv4()}
						component={"p"}
						paragraph={true}
						className={classes.prizeDescParagraph}>
						  {paragraph}
					  </Typography>)}
				</Grid>
				<Grid item xs={false} md={1} lg={1}>
				</Grid>
				<Grid item xs={6} md={4} lg={4}>
					<Typography
					  variant={"h5"}
					  component={"p"}
					  paragraph={true}
					>
						Requirement
					</Typography>
					<Typography
					  variant={"h5"}
					  component={"p"}
					  paragraph={true}
					  className={classes.requiredPoint}
					>
						{selectedPrizeValue.point} Point
					</Typography>
					<Typography
					  variant={"h5"}
					  component={"p"}
					  paragraph={true}
					>
						Value
					</Typography>
					<Select
					  className={classes.prizeValueSelect}
					  value={selectedPrizeValue.valueId}
					  onChange={e => {
						  const selectedValue = selectedPrize.pointValues.filter(pointValue => parseInt(pointValue.id) === parseInt(e.target.value));
						  if (selectedValue.length > 0) {
							  setSelectedPrizeValue({
								  valueId: selectedValue[0].id,
								  point: selectedValue[0].point
							  })
						  }
					  }
					  }
					>
						{selectedPrize.pointValues && selectedPrize.pointValues.map(pointValue =>
						  <MenuItem key={util.uuidv4()} value={pointValue.id}>{pointValue.value}</MenuItem>)}
					</Select>
					<Button
					  className={classes.claimBtn}
					  variant="contained" color="primary"
					  onClick={handleSubmit}
					>
						Submit Prize Request
					</Button>
				</Grid>
			</Grid>
		</Paper>
		<Paper className={classes.selectPrize}>
			<Title>Select Your Prize Goal</Title>
			<Divider className={classes.divider}/>
			<Grid container spacing={4}>
				{prizeTypes.map(type =>
				  <Grid key={util.uuidv4()} item xs={4} sm={4} md={2}>
					  <img
						onClick={() => {
							setSelectedPrize(type);
							setSelectedPrizeValue(initialPrizeValue);
						}}
						className={classes.prizeImage} src={type.image}/>
				  </Grid>
				)}
			</Grid>
		</Paper>
	</>
}

const useStyles = makeStyles(theme => ({
	selectPrize: {
		marginBottom: "10px",
		padding: "10px",
		minHeight: "290px"
	},
	prizeImage: {
		width: "100%",
		height: "auto",
	},
	prizeDescParagraph: {
		fontSize: "1.2rem"
	},
	prizeGoalImage: {
		width: "100%",
		height: "auto"
	},
	prizeValueSelect: {
		width: "20em"
	},
	requiredPoint: {
		paddingLeft: "5px",
		color: "green",
		fontWeight: 600
	},
	claimBtn: {
		width: "20em",
		height: "3em",
		marginTop: "2em"
	},
	divider: {
		marginBottom: "2rem"
	}
}));

export default withRouter(ClaimPrize);
