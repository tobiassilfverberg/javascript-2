import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import TodoCounter from './TodoCounter'

// test correctly count 0 todo
it("correctly count 0 todo", () => {
	// 1) Render the component we want to test
	render(<TodoCounter count={0} />)

	// 2) Find the element we want to interact with
	const spanElement = screen.getByText(/got nothing to do/i)

	// 4) Assert that the results are what we expect them to be
	expect(spanElement).toBeInTheDocument()
})

// test correctly count 1 todos
it("correctly count 1 todos", () => {
	render(<TodoCounter count={1} />)

	const spanElement = screen.getByText(/only got one thing left to do/i)

	expect(spanElement).toBeInTheDocument()
})

// test correctly count multiple todos
it("correctly count multiple todos", () => {
	render(<TodoCounter count={3} />)

	const spanElement = screen.getByText(/3 todos left/i)

	expect(spanElement).toBeInTheDocument()
})