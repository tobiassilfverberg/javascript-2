import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getRandomDog } from '../services/GetRandomDogAPI'

const RandomDog = () => {
	const { isLoading, isError, error, data } = useQuery("random-dog", getRandomDog)

  return (
    <Container className="vw-80 vh-80">
		<h1>Random dogs for everyone</h1>

		{isLoading && (<p>Random dog is loading...</p>)}

		{isError && (<p>An error occured: {error.message}</p>)}

		{data && (<img className="img-fluid" src={data.message} />)}

	</Container>
  )
}

export default RandomDog