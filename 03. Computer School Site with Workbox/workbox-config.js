module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,jpg,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};