var path = require('path');
const {resolve} = path;
const BASE = resolve(__dirname);
const SRC = resolve(BASE, 'src');
const DIST = resolve(BASE, 'dist');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.js',
		path: DIST,
		library: "fetch-action",
		libraryTarget: "umd"
	},
	module: {
		rules: [{
			test: /\.(js)$/,
			include: SRC,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['es2015'],
					}
				}
			]
		}]

	}
};