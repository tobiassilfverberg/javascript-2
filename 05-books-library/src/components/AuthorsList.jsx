import ListGroup from 'react-bootstrap/ListGroup'

const AuthorsList = ({ authors }) => {
	if (!authors.length) {
		return <p>No authors for you!</p>
	}

	return (
		<ListGroup>
			{authors.map(author => (
				<ListGroup.Item key={author.id}>
					<div>{author.name}</div>
					<div className="text-small text-muted">
						Born in: {author.date_of_birth}
					</div>
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default AuthorsList
