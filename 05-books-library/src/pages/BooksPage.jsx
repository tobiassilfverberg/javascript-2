import { useQuery } from 'react-query'
import BooksApi from '../services/BooksAPI' 
import BookList from '../components/BookList'
import Container from 'react-bootstrap/Container'

const BooksPage = () => {
	const getBooks = async () => {
		const data = await BooksApi.getBooks()

		return data
	}

	const { data, error, isError, isLoading } = useQuery("books", getBooks)

	return (
		<Container className="py-3">
			<h1> My Books </h1>

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

			{data && <BookList books={data} />}
		</Container>
	)
}

export default BooksPage