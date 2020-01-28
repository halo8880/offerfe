import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default function Test({ match }) {
	return (
	  <div>
		  <h1>Topics</h1>
		  <ul>
			  <li>
				  <Link to={`${match.url}/gaogao`}>gaogao</Link>
				  <Link to={`${match.url}/gaogao2`}>gaogao</Link>
			  </li>
		  </ul>

		  <hr/>
		  <Route path={`${match.path}/gaogao`} component={gaogao}/>
		  <Route path={`${match.path}/gaogao2`} component={gaogao2}/>
	  </div>
	);
}

function gaogao({ match }) {
	return <div>
		<div>{match.url}</div>
		<div>{match.path}</div>
	</div>
}

function gaogao2({ match }) {
	return <div>adfdsaf
		<div>{match.url}</div>
		<div>{match.path}</div>
	</div>
}
