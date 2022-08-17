import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import AuthorList from '../components/AuthorList'
import useAuthors from '../hooks/useAuthors'

const AuthorsPage = () => {
	const { data: authors, error, isError, isLoading } = useAuthors()

	return (
		<Container className="py-3">
			<h1>Authors</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{authors && <AuthorList authors={authors} />}
		</Container>
	)
}

export default AuthorsPage
