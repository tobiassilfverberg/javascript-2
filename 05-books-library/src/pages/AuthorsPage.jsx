import { useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import BasicTable from '../components/BasicTable'
import useAuthors from '../hooks/useAuthors'

const AuthorsPage = () => {
	const { data: authors, error, isError, isLoading } = useAuthors()

	const columns = useMemo(() => {
		return [
			{
				Header: 'Name of author', 
				accessor: 'name'
			},
			{
				Header: 'Date of Birth', 
				accessor: 'date_of_birth'
			},
		]
	}, [])

	return (
		<Container className="py-3">
			<h1>Authors</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{authors && <BasicTable columns={columns} data={authors} />}
		</Container>
	)
}

export default AuthorsPage
