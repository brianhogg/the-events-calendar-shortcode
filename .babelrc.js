module.exports = {
	plugins: [
		'@wordpress/babel-plugin-import-jsx-pragma',
		'@babel/transform-react-jsx',
		'@babel/proposal-class-properties',
	],
	presets: [
		[ '@babel/preset-env' ]
	],
};