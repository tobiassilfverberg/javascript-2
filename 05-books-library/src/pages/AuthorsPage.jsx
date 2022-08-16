import Container from 'react-bootstrap/Container'
import AuthorsList from '../components/AuthorsList'
import useAuthors from '../hooks/useAuthors'

const BooksPage = () => {
	const { data, error, isError, isLoading } = useAuthors()

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