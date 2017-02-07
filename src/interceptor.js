export const interceptor = response => {
	const contentType = response.headers.get("content-type");
	if (contentType && contentType.indexOf("application/json") !== -1) {
		return response.json();
	} else {
		return response.text()
	}
};
