module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-airtable',
			options: {
				apiKey: 'keyszGUPF6NHuOVP3',
				baseId: 'appJ7LZdoJfEcJIDr',
				tableName: 'examples',
			},
		},
		'gatsby-plugin-no-sourcemaps',
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {displayName: false, fileName: false},
		},
	],
}
