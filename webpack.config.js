module.exports = {
	entry: './public/app.js',
	module: {
		loaders: [
			{
				test: /\.(glsl|fs|vs|frag|vert)$/,
				loader: 'raw-loader', 
				exclude: /node_modules/
			},
			{
				test: /\.(glsl|fs|vs|frag|vert)$/,
				loader: 'glslify-loader', 
				exclude: /node_modules/
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