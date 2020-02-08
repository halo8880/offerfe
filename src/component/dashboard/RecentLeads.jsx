import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title.jsx';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles(theme => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

export default function RecentLeads({leads}) {
	const classes = useStyles();
	return (
	  <React.Fragment>
		  <Title>Recent Leads</Title>
		  <Table size="small">
			  <TableHead>
				  <TableRow>
					  <TableCell>Lead Date</TableCell>
					  <TableCell>Campaign Name</TableCell>
					  <TableCell>Earned Point</TableCell>
				  </TableRow>
			  </TableHead>
			  <TableBody>
				  {leads.map(row => (
					<TableRow key={row.leadDate}>
						<TableCell>{row.leadDate}</TableCell>
						<TableCell>{row.campaignName}</TableCell>
						<TableCell>{row.point}</TableCell>
					</TableRow>
				  ))}
			  </TableBody>
		  </Table>
		  <div className={classes.seeMore}>
			  <Link color="primary" href="#" onClick={preventDefault}>
				  See more orders
			  </Link>
		  </div>
	  </React.Fragment>
	);
}
