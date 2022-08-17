import { useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
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
			{
				Header: 'Actions',
				Cell: ({ row: { original: author } }) => (
					<Button
						variant="primary"
						size="sm"
						as={Link}
						to={`/authors/${author.id}`}
					>
						Show
					</Button>
				)
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
