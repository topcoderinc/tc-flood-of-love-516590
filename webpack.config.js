var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "dist/"),
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: 'dist'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	resolve:{
		alias:{
			'vue$': 'vue/dist/vue.common.js'
		}
	}
};
