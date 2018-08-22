const Airtable = require('airtable')
const crypto = require('crypto')
const capitalize = ([first, ...rest]) => [first.toUpperCase(), rest].join('')

const createContentDigest = obj => crypto
	.createHash('md5')
	.update(JSON.stringify(obj))
	.digest('hex')

module.exports = async (
	{createNodeId, actions: {createNode, setPluginStatus}},
	{apiKey, baseId, tableName, tableView = '', name = tableName},
) => {
	const table = new Airtable({apiKey}).base(baseId)(tableName)
	const query = await table.select({view: tableView}).all()
	query.forEach(row => {
		createNode({
			...row.fields,
			id: createNodeId(`airtable-row-${row.id}`),
			sourceInstanceName: name,
			children: [],
			parent: null,
			internal: {
				type: `Airtable${capitalize(tableName)}`,
				contentDigest: createContentDigest(row),
			},
		})
	})
}
