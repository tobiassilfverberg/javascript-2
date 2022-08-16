import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import useBooks from '../hooks/useBooks'
import useAuthors from '../hooks/useAuthors'

const Navigation = () => {
	const { data: books } = useBooks()
	const { data: authors } = useAuthors()

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">Books Library</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/books">
						Books&nbsp;
							{
								books
									? `(${books.length})`
									: ''
							}
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/authors">
							Authors&nbsp;
							{
								authors
									? `(${authors.length})`
									: ''
							}
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
