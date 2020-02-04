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
};

export function getAccessToken() {
	return localStorage.getItem('accessToken');
};

export function setAccessToken(accessToken) {
	localStorage.setItem('accessToken', accessToken);
};

export function clearAccessToken() {
	localStorage.clear();
};

export function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
