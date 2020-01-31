import axios from "axios";
import * as util from "../component/Util"

export function sendRequest(config) {
	config.headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};
	if (util.getAccessToken()) {
		config.headers.Authorization = `${util.getAccessToken()}`;
	}
	return axios.request(config);
}

export function get(url, params) {
	const config = {
		method: 'get',
		url,
		params,
	};
	return sendRequest(config);
}

export function post(url, data) {
	const config = {
		method: 'post',
		url,
		data,
	};
	return sendRequest(config);
}

