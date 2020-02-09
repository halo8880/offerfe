import React, { useEffect, useState } from 'react';
import * as Axios from '../../config/axios';
import { withRouter } from 'react-router-dom';
import * as util from '../Util';

function OfferwallWork({ match, setPageName }) {
	const [wallData, setWallData] = useState({
		id: "",
		networkName: "",
		image: "",
		iframeUrl: ""
	});
	setPageName(match.params.net);

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/network/one-wall`, { netId: match.params.netId })
		  .then(response => {
			  setWallData(response.data);
		  })
		  .catch(err => {
			  console.log(err);
			  util.clearAccessToken();
			  window.location.href = "/";
		  });
	}, []);

	useEffect(() => {
		if (wallData.networkName.toLowerCase() === "cpagrip") {
			const a = document.createElement("a");
			a.href = wallData.iframeUrl;
			a.target = "__blank";
			a.click();
		}
	}, [wallData.iframeUrl]);

	return <>
		{wallData.networkName.toLowerCase() !== "cpagrip" &&
		  <iframe src={wallData.iframeUrl} width="100%" height="1000px"
				  style={{
					  border: "0",
					  padding: "0",
					  margin: "0"
				  }}
		  />
		}
	</>
}

export default withRouter(OfferwallWork);
