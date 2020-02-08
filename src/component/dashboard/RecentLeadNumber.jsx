import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title.jsx';

export default function RecentLeadNumber({ number }) {
	return (
	  <React.Fragment>
		  <Title>Recent Leads</Title>
		  <Typography component="p" variant="h4">
			  {number ? number : 0}
		  </Typography>
		  <Typography color="textSecondary">
			  on {new Date().toString()}
		  </Typography>
	  </React.Fragment>
	);
}
