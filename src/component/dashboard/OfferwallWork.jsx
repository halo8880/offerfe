import React, { useState } from 'react';
import * as Axios from '../../config/axios';
import { withRouter } from 'react-router-dom';
import * as util from '../Util';

function OfferwallWork({ match, setPageName }) {
	const [wallUrl, setWallUrl] = useState("");
	setPageName(match.params.net);
	if (match.params.net === "adworkmedia") {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/current`)
		  .then(response => {
			  setWallUrl(`${"http://lockwall.xyz/wall/5Yz"}/${response.data.id}`)
		  })
		  .catch(err => {
			  console.log(err);
			  util.clearAccessToken();
			  window.location.href = "/";
		  });
	} else if (match.params.net === "cpalead") {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/current`)
		  .then(response => {
			  setWallUrl(`${"https://viral782.com/list/389339?subid="}${response.data.id}`)
		  })
		  .catch(err => {
			  console.log(err);
			  util.clearAccessToken();
			  window.location.href = "/";
		  });
	}

	return <>
		<iframe src={wallUrl} width="100%" height="1000px"
				style={{
					border: "0",
					padding: "0",
					margin: "0"
				}}
		/>
	</>
}

export default withRouter(OfferwallWork);
