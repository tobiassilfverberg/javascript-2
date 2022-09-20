import { render, screen } from '@testing-library/react'
import LoginForm from './LoginForm'

it("does not show loading spinner", () => {
	// Render the LoginForm component
	render(<LoginForm />)

	// Find element
	const loadingParagraph = screen.queryByText(/loading/i)

	// Assert that the element does NOT exist in the document
	expect(loadingParagraph).not.toBeInTheDocument()
})

it("renders input fields", () => {
	// Render the LoginForm component
	render(<LoginForm />)

	// Find all the elements
	const emailInputEl = screen.getByRole('textbox', { name: /^email/i })
	const emailConfirmInputEl = screen.getByRole('textbox', { name: /confirm email/i })
	const passwordInputEl = screen.getByLabelText(/^password/i)
	const passwordConfirmInputEl = screen.getByLabelText(/confirm password/i)

	// Assert that all the elements exist in the document
	expect(emailInputEl).toBeInTheDocument()
	expect(emailConfirmInputEl).toBeInTheDocument()
	expect(passwordInputEl).toBeInTheDocument()
	expect(passwordConfirmInputEl).toBeInTheDocument()
})

it("renders input fields initially empty", () => {
	// Render the LoginForm component
	render(<LoginForm />)

	// Find all the elements
	const emailInputEl = screen.getByRole('textbox', { name: /^email/i })
	const emailConfirmInputEl = screen.getByRole('textbox', { name: /confirm email/i })
	const passwordInputEl = screen.getByLabelText(/^password/i)
	const passwordConfirmInputEl = screen.getByLabelText(/confirm password/i)

	// Assert that all the elements exist in the document
	expect(emailInputEl.value).toBe('')
	expect(emailConfirmInputEl.value).toBe('')
	expect(passwordInputEl.value).toBe('')
	expect(passwordConfirmInputEl.value).toBe('')
})
