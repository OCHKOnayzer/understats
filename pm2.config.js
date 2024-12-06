module.exports = {
	apps: [
		{
			name: 'sveltekit-app',
			script: 'index.js',
			watch: true,
			env: {
				SERVER_URL: 'http://https://dev-api-gateway-v1.sntmq.1keep.bet:11250/api',
				PORT: 4671,
				NODE_ENV: 'production'
			}
		}
	]
};
