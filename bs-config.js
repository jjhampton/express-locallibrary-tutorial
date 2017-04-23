module.exports = {
	files: [
		'public/index.html',
		'public/app.js'
	],
    proxy: {
		target: 'http://localhost:3000' // change to localhost address used by Express server
	},
	port: 4000,
	ui: {
		port: 4001
	},
	open: false
};