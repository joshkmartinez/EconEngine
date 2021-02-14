const Airtable = require('airtable')
require('dotenv').config()

exports.handler = function (event, context, callback) {
	const base = new Airtable({apiKey: process.env.KEY}).base('appT1k2Z1op16DaNG')
	const data = []
	base('Data')
		.select({
			view: 'Grid view'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				records.forEach((record) => {
					data.push({
						Question: record.get('Question'),
                        Answer: record.get('Answer'),
                        Source: record.get('Source')
					})
				})

				fetchNextPage()
			},
			function done(error) {
				if (error) {
					callback(error)
				}

				callback(null, {
					statusCode: 200,
					body: JSON.stringify(data)
				})
			}
		)
}
