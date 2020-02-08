export function debounce(func, wait) {
	let timeout;

	return function () {
		const context = this,
		  args = arguments;

		const executeFunction = function () {
			func.apply(context, args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(executeFunction, wait);
	};
}

export function getAccessToken() {
	return localStorage.getItem('accessToken');
}

export function setAccessToken(accessToken) {
	localStorage.setItem('accessToken', accessToken);
}

export function clearAccessToken() {
	localStorage.clear();
}

export function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

export function getRefByFromQueryString() {
	const queryString = window.location.search.substring(1);
	if (queryString) {
		const vars = queryString.split("&");
		for (let i = 0; i < vars.length; i++) {
			let pair = vars[i].split("=");
			if (pair[0] == "refBy") {
				return pair[1];
			}
		}
	}
	return ""
}


export function createCookie(name, value, days) {
	let expires;
	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

export function getCookie(c_name) {
	if (document.cookie.length > 0) {
		let c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			let c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}
