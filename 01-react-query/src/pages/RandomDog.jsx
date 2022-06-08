import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getRandomDog } from '../services/GetRandomDogAPI'

const RandomDog = () => {
	const { isLoading, isError, error, data } = useQuery("random-dog", getRandomDog)

  return (
    <Container>
		<h1>Random dogs for everyone</h1>

		{isLoading && (<p>Random dog is loading...</p>)}

		{isError && (<p>An error occured: {error.message}</p>)}

		{data && (<img src={data.message} />)}

	</Container>
  )
}

export default RandomDog