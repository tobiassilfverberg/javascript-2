import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getRandomDadJoke } from '../services/ICanHazDadJokeAPI'

const RandomDadJokePage = () => {
	const { isLoading, isError, error, data } = useQuery('random-dad-joke', getRandomDadJoke)

	return (
		<Container className="py-3">

			<h1>Random dad joke</h1>

			{isLoading && (<p>Loading dad joke...</p>)}

			{isError && (<p>An error occoured: {error.message}</p>)}

			{data && (<p> {data.joke} </p> )}
			
		</Container>
	)
}

export default RandomDadJokePage