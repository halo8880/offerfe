import React, { useEffect, useState } from 'react';
import * as Axios from '../../config/axios';
import { withRouter } from 'react-router-dom';
import * as util from '../Util';

function OfferwallWork({ match, setPageName }) {
	const [wallUrl, setWallUrl] = useState("");
	setPageName(match.params.net);

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/network/one-wall`, { netId: match.params.netId })
		  .then(response => {
			  setWallUrl(response.data.iframeUrl);
		  })
		  .catch(err => {
			  console.log(err);
			  util.clearAccessToken();
			  window.location.href = "/";
		  });
	}, []);

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
