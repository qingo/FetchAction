import {serialize} from './serialize';
export const search = (url, data) => {
	const searchParams = serialize(data);
	if (searchParams) {
		if (url.indexOf('?') > 0) {
			url = `${url}&${searchParams}`;
		} else {
			url = `${url}?${searchParams}`;
		}
	}
	return url;
};
