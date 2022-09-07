import React, { useRef, useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const ForgotPasswordPage = () => {
	const emailRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(false)
	const { resetPassword } = useAuthContext()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError(null)
		setMessage(null)

		// try to send email to entered email
		try {
			setLoading(true)
			await resetPassword(emailRef.current.value)

			setMessage("Password reset link sent.")

		} catch (err) {
			setError(err.message)

		} finally {
			setLoading(false)
			
		}
	}

	return (
		<Container className="py-3 center-y">
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title className="mb-3">Forgot password?</Card.Title>

							{error && (<Alert variant="danger">{error}</Alert>)}
							{message && (<Alert variant="success">{message}</Alert>)}

							<p> Enter your email adress and we will send you a reset link </p>

							<Form onSubmit={handleSubmit}>

								<Form.Group id="email" className="mb-3">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Button disabled={loading} onClick={handleSubmit} type="submit">Send email</Button>
							</Form>
						</Card.Body>
					</Card>

					<div className="text-center mt-3">
						Password resetted? <Link to="/login">Log In</Link>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ForgotPasswordPage
