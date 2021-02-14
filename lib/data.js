import fetch from 'isomorphic-unfetch'

const fetchData = async () => {
	const res = await fetch('/.netlify/functions/data')
	return res.json()
}

export default fetchData
