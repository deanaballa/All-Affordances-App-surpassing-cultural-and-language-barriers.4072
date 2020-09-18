const path = require('path');
const webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: './src/index.js',
	//watch: true,
	watchOptions: {
		ignored: [
			'/node_modules/',
			'/dist/'
		]
	},
	output: {
		filename: '[name].[chunkhash].js',
		publicPath: '/public/',
		path: path.resolve(__dirname, 'dist/')
	},
	target: "web",
	externals: {
		jquery: "jQuery",
		backbone: "backbone"
	},
	plugins: [
		new webpack.ProgressPlugin(), 
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			"window.$": "jquery",
			backbone: "backbone"
		}),
		new HtmlWebpackPlugin({
			template: "./src/views/template/index.pug",
			filename: "index.html"
		})	,
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin()
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],
					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.pug$/,
				use: ["pug-loader"]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
};
