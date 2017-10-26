import 'whatwg-fetch';
import {interceptor as defaultInterceptor} from './interceptor';
import {search} from './search';
import {pathname} from './pathname';

const headers = {
	'Content-Type': 'application/json',
	'pragma': 'no-cache',
	'cache-control': 'no-cache'
};

let theInterceptor = defaultInterceptor;
export const interceptor = (myInterceptor) => {
	theInterceptor = myInterceptor;
};


export default (url, actions, method = 'GET') => {
	let successAction, failAction;
	if (!Array.isArray(actions)) {
		method = actions || 'GET';
	} else {
		[successAction, failAction] = actions;
	}

	method = method.toUpperCase();
	return (pathnames = {}, data = {}) => {
		return dispatch => {
			const params = {
				headers: headers,
				method,
			};

			let u = pathname(url, pathnames);
			if ((method === 'POST' || method === 'PATCH' || method === 'UPDATE' || method === 'PUT' || method === 'DELETE')
				&& Object.keys(data).length !== 0) {
				params.body = JSON.stringify(data)
			} else if (method === 'GET') {
				u = search(u, data);
			}
			return fetch(u, params)
				.then(theInterceptor)
				.then(result => {
					typeof successAction == 'function' && dispatch(successAction(result));
					return result;
				}, result => {
					typeof failAction == 'function' && dispatch(failAction(result));
				})
		};
	};
}