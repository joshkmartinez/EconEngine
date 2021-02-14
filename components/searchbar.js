import {Box, Flex, Heading, Text, Link, Button} from 'rebass'
import {Label, Input} from '@rebass/forms'
import dynamic from 'next/dynamic'
const Typewriter = dynamic(() => import('typewriter-effect'), {
	ssr: false
})

const examples = [
	'Can I get rental assistance?',
	'What are unemployment benefits?',
	'What is mortgage relief?',
	'How do I file for unemployment?',
	'How can I open a bank account?',
	'Is now a good time to buy a home?'
]

const searchbar = () => {
	return (
		<Box width={[1, 4 / 5]} mx="auto">
			<Flex>
				<Box width={1}>
					<Input placeholder="Search EconEngine!" />
				</Box>
				<Button mx={[1, 2]} variant="primary">
					Search
				</Button>
			</Flex>
			<Typewriter
				options={{
					strings: examples,
					autoStart: true,
					loop: true
				}}
			/>
		</Box>
	)
}

export default searchbar
