const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
var OpenBrowserPlugin =  require("open-browser-webpack-plugin");

module.exports = {
	entry: {
		main: './src/index.js',
		vendors: './vendors.js',
		// hotLoader: 'react-hot-loader/patch', //@todo Max -
		// devServer: 'webpack-dev-server/client?http://localhost:8080', //@todo Max -
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		// only:'webpack/hot/only-dev-server', //@todo Max -
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename:'[name].[hash].js',
		publicPath: '/'
	},
	devtool: 'source-map',
	devServer: {
		// hot: true, //@todo Max -
		// enable HMR on the server
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './'),
		// match the output path
		compress: true,
		port: 4200,
		publicPath: '/'
		// match the output `publicPath`
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [['es2015', {modules: false}]],
							plugins: ['syntax-dynamic-import']
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test: /\.(ico|png|gif|jpg|svg)$/i,
				use: [{
					loader: 'file-loader'
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			filename: 'index.html',
			inject: 'body'}),
		new CommonsPlugin({
			names: ['vendors', 'manifest'], // Specify the common bundle's name.
			minChunks: function (module) {
				// this assumes your vendor imports exist in the node_modules directory
				return module.context && module.context.indexOf('node_modules') !== -1;
			}
		}),
		new OpenBrowserPlugin({ url: 'http://localhost:4200' }),
		// new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally
		// new webpack.NamedModulesPlugin(),
		// prints more readable module names in the browser console on HMR updates
	]
};
