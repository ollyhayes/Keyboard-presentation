module.exports = {
	'env': {
		'browser': true,
		'es6': true,
	},
	'extends': [
		'react-app',
		// "shared-config",
		'eslint:recommended',
	],
	// "parserOptions": {
	// 	"sourceType": "module",
	// 	"ecmaVersion": 2018
	// },
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'react/prop-types': [
			'off'
		],
	}
};