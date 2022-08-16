import BookList from '../components/BookList'
import Container from 'react-bootstrap/Container'
import useBooks from '../hooks/useBooks'

const BooksPage = () => {
	const { data, error, isError, isLoading } = useBooks()

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