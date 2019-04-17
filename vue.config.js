const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
	baseUrl: '/',
	// publicPath: '/',
	 publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
	outputDir: 'dist',
	// assertDir: '',
	indexPath: 'index.html',
	filenameHashing: true,
	pages: {
		index: {
			entry: './src/main.js',
			template: './public/index.html',
			filename: 'index.html',
		}
	},
	lintOnSave: process.env.NODE_ENV !== 'production',
	runtimeCompiler: true,
	transpileDependencies: [],
	devServer: {
		port: 8089,
		host: 'localhost',
		https: false,
        open: true,
        // proxy: {
        //     // '/services/':{
        //     //     target: 'http://172.18.232.163:8894/',
        //     //     changeOrigin: true,
        //     //     ws: true,
        //     //     pathRewrite: {
        //     //         "^/services": ''
        //     //     }
        //     // }
        // }
    },

}