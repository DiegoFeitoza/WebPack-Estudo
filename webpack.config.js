const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports={
	entry: './app/index.js',
	output: {
		path: __dirname + '/public',
		filename: './app.js'
	},
	devServer: {
		port: '8080',
		contentBase: './public'
	},
	plugins:[
		new ExtractTextPlugin('app.css')
	],
	module:{
		loaders:[{
			test: /.js?$/, //Adicionando todos os arquivos que tenham a extensão JS dentro do modulo
			loader: 'babel-loader', //Adicionando a biblioteca de onde o loarder será carregado
			exclude: /node_modules/, // Adicionando a exclusão dos arquivos JS que estão dentro da pasta NODE_MODULES(pode ser adicionado mais de 1 pasta)
			query: {
				presets: ['es2015','react'], //Adicionando o ECMASCRIPT 2015 e o REACT no preset da biblioteca do modulo instalado
				plugins: ['transform-object-rest-spread'] //Adicionando o plugin para ser usado o spread ou rest dentro do nosso JS
			}
		},{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader","css-loader")
		}]
	}
}