import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodoForm from '../AddTodoForm'

it("renders input field initially empty", () => {
	// render
	render(<AddTodoForm />)

	// find
	const inputElement = screen.getByRole('textbox')

	// assert
	expect(inputElement.value).toBe('')
})

it("can type into input field", async () => {
	// render
	render(<AddTodoForm />)

	// find
	const inputElement = screen.getByRole('textbox')

	// interact
	// inputElement.value = 'lalala' // WRONG!
	await userEvent.type(inputElement, 'A new todo')

	// assert
	expect(inputElement.value).toBe('A new todo')
})

it("empties input field after clicking on the 'add' button", async () => {
	// render
	render(<AddTodoForm onNewTodo={() => {}} />)

	// find
	const inputNewTodoTitle = screen.getByRole('textbox')
	const btnAddNewTodo = screen.getByRole('button', { name: /add/i })

	// interact
	await userEvent.type(inputNewTodoTitle, 'A new todo')
	await userEvent.click(btnAddNewTodo)

	// assert
	expect(inputNewTodoTitle.value).toBe('')
})

it("empties input field after pressing <enter>", async () => {
	// render
	render(<AddTodoForm onNewTodo={() => {}} />)

	// find
	const inputNewTodoTitle = screen.getByRole('textbox')

	// interact
	await userEvent.type(inputNewTodoTitle, 'A new todo')
	await userEvent.type(inputNewTodoTitle, '{Enter}')

	// assert
	expect(inputNewTodoTitle.value).toBe('')
})
