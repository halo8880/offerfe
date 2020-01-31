import React, { useState } from 'react';
import * as Axios from '../../config/axios';
import { withRouter } from 'react-router-dom';

function OfferwallWork({ match }) {
	const [userId, setUserId] = useState("");
	if (match.params.net === "adworkmedia") {
		Axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/current`)
		  .then(response => {
			  setUserId(`${"http://lockwall.xyz/wall/5Yz"}/${response.data}`)
		  })
		  .catch(err => console.log(err));
	}

	return <>
		<iframe src={userId} width="900px" height="1000px"
				style={{
					border: "0",
					padding: "0",
					margin: "0"
				}}
		/>
	</>
}

export default withRouter(OfferwallWork);
