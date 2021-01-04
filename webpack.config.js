const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode:'development',
	entry:{index: "./public/js/index.js"}, 
	output:{
		path:path.resolve(__dirname,"./public/dist"),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './public/html/index.html',
			filename:'index.html',
			title: 'index',
			chunks:['index']
		}),
		
	]
}