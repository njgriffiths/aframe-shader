module.exports = {
	entry: './public/app.js',
	module: {
		loaders: [
			{
				test: /\.(glsl|fs|vs)$/,
				loader: 'webpack-glsl-loader'
			}
		]
	},
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		extensions: ['.js']
	}
};