import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const AuthorList = ({ authors }) => {
	if (!authors.length) {
		return <p>No authors for you!</p>
	}

	return (
		<ListGroup>
			{authors.map(author => (
				<ListGroup.Item
					action
					as={Link}
					key={author.id}
					to={`/authors/${author.id}`}
				>
					{author.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default AuthorList
