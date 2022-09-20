import { render, screen } from '@testing-library/react'
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