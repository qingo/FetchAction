export const pathname = (template, pathnames = {}) => {
	return template.replace(/\{\{(\w+)}}/g, (literal, key) => {
		if (key in pathnames) {
			return pathnames[key]
		} else {
			return ''
		}
	});
};