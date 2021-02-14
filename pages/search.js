import Airtable from 'airtable'
import Layout from '../components/layout'
import {Box, Flex, Heading, Text, Link, Image} from 'rebass'
import Searchbar from '../components/searchbar'

const getData = () => {
	const base = new Airtable({apiKey: process.env.KEY}).base('appT1k2Z1op16DaNG')

	base('Data')
		.select({
			view: 'Grid view'
		})
		.eachPage(
			function page(records, fetchNextPage) {
				records.forEach((record) => {
					console.log('Retrieved', record.get('Question'))
				})
				fetchNextPage()
			},
			function done(error) {
				if (error) {
					console.error(error)
				}
			}
		)
}

const search = () => {
	return (
		<Layout>
			<Searchbar full={true} />
		</Layout>
	)
}

export default search
