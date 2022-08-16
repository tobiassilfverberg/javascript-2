import { useQuery } from 'react-query'
import BooksApi from '../services/BooksAPI' 
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col' 
import Row from 'react-bootstrap/Row' 
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

			{data && (
				<Row md={2} sm={1} lg={3} className="g-1">
					{data.map(book =>
						<Col md="auto" key={book.id}>
							<Card 
								key ={book.id} border="dark" style={{ width: '22rem' }}
							>
								<Card.Body>
									<Card.Title 
										className="text-center font-weight-bold"
										> {book.title} 
									</Card.Title>
							
									<Card.Text className="text-center"> 
										Written by {book.author.name} and published in {book.published} 
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					)}
				</Row>
			)}
		</Container>
	)
}

export default BooksPage