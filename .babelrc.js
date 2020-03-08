const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
	// Sets of plugins
	presets: [
		// The latest JavaScript
		// takes any target environments you've specified and checks them against its mappings to compile a list of plugins and passes it to Babel
		[
			'@babel/preset-env',
			{
				targets: {
					node: true,
				},
				loose: true,

				// Do not transpile ESM in production for tree shaking
				// modules: isTest ? 'commonjs' : false,
			},
		],
	],
}
