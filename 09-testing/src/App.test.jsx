import { render, screen } from '@testing-library/react'
import { click } from '@testing-library/user-event'
import { expect, it } from 'vitest'
import App from './App'

it('renders react + vite text', () => {
	// 1) Render the component we want to test
	render(<App />)

	// 2) Find the element we want to interact with
	const headingElement = screen.getByText(/vite \+ react/i)

	// 3) Interact with said element

	// 4) Assert that the results are what we expect them to be
	expect(headingElement).toBeInTheDocument()
})

it('does not render vite + react text', () => {
	// 1) Render the component we want to test
	render(<App />)

	// 2) Find the elements we want to interact with
	const headingElement = screen.queryByText(/vite \+ react/i)

	// 3) Interact with said elements

	// 4) Assert that the results are what we expect them to be
	expect(headingElement).not.toBeInTheDocument()
})

it('counter is 0 as default', async () => {
	// 1) Render the component we want to test
	render(<App />)

	// 2) Find the elements we want to interact with
	const counterButton = screen.getByRole('button')

	// 3) Interact with said elements

	// 4) Assert that the results are what we expect them to be
	expect(counterButton).toHaveTextContent(/count is 0/i)
})

it('increases counter by 1 when clicking counter-button', async () => {
	// 1) Render the component we want to test
	render(<App />)

	// 2) Find the elements we want to interact with
	const counterButton = screen.getByRole('button')

	// 3) Interact with said elements
	await click(counterButton)

	// 4) Assert that the results are what we expect them to be
	expect(counterButton).toHaveTextContent(/count is 1/i)
})