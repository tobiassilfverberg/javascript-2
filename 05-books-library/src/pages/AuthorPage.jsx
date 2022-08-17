import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useAuthor from '../hooks/useAuthor'

const AuthorPage = () => {
	const { id } = useParams()
	const { data: author, error, isError, isLoading } = useAuthor(id)

	return (
		<Container className="py-3">
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{author && <>
				<h1>{author.name}</h1>

				<p>Born: {author.date_of_birth}</p>

				<ul>
					{author.books.map(book => (
						<li key={book.id}>{book.title}</li>
					))}
				</ul>
			</>}
		</Container>
	)
}

export default AuthorPage
