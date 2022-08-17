import { useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import BasicTable from '../components/BasicTable'
import useBooks from '../hooks/useBooks'

const BooksPage = () => {
	const { data: books, error, isError, isLoading } = useBooks()

	const columns = useMemo(() => {
		return [
			{
				Header: 'Book Title', 
				accessor: 'title'
			},
			{
				Header: 'Author', 
				accessor: 'author.name'
			},
			{
				Header: 'Pages', 
				accessor: 'pages'
			},
			{
				Header: 'Published', 
				accessor: 'published'
			},
		]
	}, [])

	return (
		<Container className="py-3">
			<h1>Books</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{books && <BasicTable columns={columns} data={books} />}
		</Container>
	)
}

export default BooksPage
