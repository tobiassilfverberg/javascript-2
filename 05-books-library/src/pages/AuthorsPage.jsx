import { useQuery } from 'react-query'
import BooksApi from '../services/BooksAPI' 
import Container from 'react-bootstrap/Container'
import AuthorsList from '../components/AuthorsList'

const BooksPage = () => {
	const getAuthors = async () => {
		const data = await BooksApi.getAuthors()

		return data
	}

	const { data, error, isError, isLoading } = useQuery("authors", getAuthors)

	return (
		<Container className="py-3">
			<h1> My Authors </h1>

			{isLoading && (
				<div>
					Loading...
				</div>
			)}

			{isError && (
				<div>
					An error has occured... {error.message}
				</div>
			)}

			{data && <AuthorsList authors={data} />}
		</Container>
	)
}

export default BooksPage