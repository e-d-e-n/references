const Airtable = require('airtable')
const crypto = require('crypto')

const createContentDigest = obj => crypto
	.createHash('md5')
	.update(JSON.stringify(obj))
	.digest('hex')

module.exports = async (
	{createNodeId, actions: {createNode, setPluginStatus}},
	{apiKey, baseId, tableName, tableView, queryName},
) => {
	const table = new Airtable({apiKey}).base(baseId)(tableName)
	const query = await table.select({view: tableView}).all()
	query.forEach(row => {
		createNode({
			...row.fields,
			id: createNodeId(`airtable-row-${row.id}`),
			children: [],
			parent: null,
			internal: {
				type: `Airtable${queryName || ''}`,
				contentDigest: createContentDigest(row),
			},
		})
	})
}
