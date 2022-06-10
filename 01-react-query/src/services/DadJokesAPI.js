import axios from 'axios'

axios.defaults.baseURL = 'https://dad-jokes.p.rapidapi.com'

const fakeDelay = 3500

const requestOptions = {
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_DAD_JOKES_API_KEY,
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
	}
}

export const getRandomJoke = async () => {
	const response = await axios.get('/random/joke', requestOptions)

	fakeDelay && await new Promise(r => setTimeout(r, fakeDelay))

	return response.data
}

export const getJokeByType = async ({ queryKey }) => {
	const [_key, type] = queryKey

	const response = await axios.get(`/joke/type/${type}`, requestOptions)
	return response.data
}

export default {
	getRandomJoke,
	getJokeByType,
}
