module.exports = {
	apps: [
		{
			name: 'sveltekit-app',
			script: 'index.js',
			watch: true,
			env: {
				PORT: 4671,
				NODE_ENV: 'production'
			}
		}
	]
};
