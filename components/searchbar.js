import React, {useState, useEffect} from 'react'
import {Box, Flex, Heading, Text, Link, Button} from 'rebass'
import {Input} from '@rebass/forms'
import dynamic from 'next/dynamic'
const Typewriter = dynamic(() => import('typewriter-effect'), {
	ssr: false
})
import fetchData from '../lib/data'
import {SpinnerCircular} from 'spinners-react'
import Popup from 'reactjs-popup'
import ReactMarkdown from 'react-markdown'

const examples = [
	'Can I get rental assistance?',
	'What are unemployment benefits?',
	'What is mortgage relief?',
	'How do I file for unemployment?',
	'How can I open a bank account?'
]
const searchbar = ({full = false}) => {
	const [data, setData] = useState([])
	const [query, setQuery] = useState('')

	useEffect(() => {
		const d = async () => {
			setData(await fetchData())
		}

		d()
	}, [])

	const updateFilter = (e) => {
		setQuery(e.target.value)
	}

	const searchFilter = (i) => {
		if (
			i.Question.toLowerCase().includes(query.toLowerCase()) ||
			i.Answer.toLowerCase().includes(query.toLowerCase())
		) {
			return i
		}
	}

	return (
		<Box width={[1, 4 / 5]} my={[2, 3]} mx="auto">
			<Box>
				<Flex>
					<Box width={1}>
						<Input
							placeholder="Search EconEngine!"
							value={query}
							onChange={(e) => updateFilter(e)}
						/>
					</Box>
					<Link href="/search">
						<Button mx={[1, 2]} variant="primary">
							Search
						</Button>
					</Link>
				</Flex>
				<Typewriter
					options={{
						strings: examples,
						autoStart: true,
						loop: true
					}}
				/>
			</Box>
			<Box>
				{full ? (
					<Box>
						{data.length === 0 ? (
							<SpinnerCircular
								color="#30c"
								size={100}
								speed={123}
								thickness={234}
							/>
						) : (
							data
								.filter((i) => searchFilter(i))
								.map((i) => (
									<Card
										key={i.Question}
										question={i.Question}
										answer={i.Answer}
										source={i.Source}
									/>
								))
						)}
					</Box>
				) : null}
			</Box>
		</Box>
	)
}

const Card = ({question, answer, source}) => {
	console.log(question, answer, source)
	return (
		<Box
			m={2}
			py={2}
			bg="whitesmoke"
			sx={{
				border: '1px solid grey',
				borderRadius: 5
			}}
			fontSize={[1, 2, 3]}
		>
			<Popup
				trigger={
					<Button
						p={0}
						width={1}
						variant="blank"
						sx={{
							fontFamily: 'Work Sans',
							':hover': {
								textShadow: '1px 1px #FFFFFF',
								fontWeight: 'bold',
								borderRadius: 10
							}
						}}
					>
						<Flex mx={2} justifyContent="space-between" color="bt5blue">
							<Text textAlign="left">{question}</Text>
						</Flex>
					</Button>
				}
				closeOnDocumentClick
				modal
				nested
			>
				<Box bg="snow" sx={{border: '3px solid #23272A'}} p={[4, 5, 6]}>
					<ReactMarkdown>{answer}</ReactMarkdown>
					<Text sx={{fontFamily: 'Work Sans'}} fontSize={[2, 3, 4]}>
						<Link href={source}>Source</Link>
					</Text>
				</Box>
			</Popup>
		</Box>
	)
}

export default searchbar
