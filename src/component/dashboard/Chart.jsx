import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title.jsx';

export default function Chart({ chartData }) {
	const theme = useTheme();

	const convertedChartData = chartData.map(each => ({ time: each.time, amount: each.numberOfLeads }));
	console.log(convertedChartData);
	return (
	  <React.Fragment>
		  <Title>This Month</Title>
		  <ResponsiveContainer>
			  <LineChart
				data={convertedChartData}
				margin={{
					top: 16,
					right: 16,
					bottom: 0,
					left: 24,
				}}
			  >
				  <XAxis dataKey="time" stroke={theme.palette.text.secondary}/>
				  <YAxis stroke={theme.palette.text.secondary}>
					  <Label
						angle={270}
						position="left"
						style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
					  >
						  Leads
					  </Label>
				  </YAxis>
				  <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false}/>
			  </LineChart>
		  </ResponsiveContainer>
	  </React.Fragment>
	);
}
