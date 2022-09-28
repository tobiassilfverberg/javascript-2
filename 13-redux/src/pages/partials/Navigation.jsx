import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import imgFavicon from '../../assets/icons/favicon-96x96.png'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						src={imgFavicon}
						width="30"
						height="30"
						className="d-inline-block align-top me-1"
						alt="A brown cardboard box"
					/>{' '}
					Redux State Management
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto align-items-center">
						<Nav.Link as={NavLink} to="/account"><span aria-label="bank">🏦</span> Account</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
