import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import BookList from '../components/BookList'
import useBooks from '../hooks/useBooks'

const BooksPage = () => {
	const { data: books, error, isError, isLoading } = useBooks()

	return (
		<Container className="py-3">
			<h1>Books</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{books && <BookList books={books} />}
		</Container>
	)
}

export default BooksPage
