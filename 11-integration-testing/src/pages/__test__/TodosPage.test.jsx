import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodosPage from '../TodosPage'

test("todo list is initially empty", () => {
	render(<TodosPage />)

	// find any listitem elements
	const listitemEls = screen.queryAllByRole('listitem')

	// expect list to be empty
	expect(listitemEls.length).toBe(0)
})

test("can add a new todo", async () => {
	render(<TodosPage />)

	// find form elements
	const inputNewTodoTitle = screen.getByRole('textbox')
	const btnAddNewTodo = screen.getByRole('button', { name: /add/i })

	const newTodoTitle = 'A new todo'

	// type into form and click the add-button
	await userEvent.type(inputNewTodoTitle, newTodoTitle)
	await userEvent.click(btnAddNewTodo)

	// assert that the new todo has been added to the list
	// only asserts that the text 'A new todo' can be found SOMEWHERE on the screen, NOT that it is a listitem with said text
	const newTodoEl = screen.getByText(newTodoTitle)
	expect(newTodoEl).toBeInTheDocument()

	/*
	// only asserts that SOME todo has been added, NOT a todo with the text that was submitted
	const listitemEls = screen.queryAllByRole('listitem')
	expect(listitemEls.length).toBe(1)
	*/
})

test("should render multiple todos", () => {
	// fix me

})

test("should be able to add to existing list of todos", () => {
	// fix me

})

test("counter is updated when a new todo is added", () => {
	// fix me

})

test("a todo changes status when clicked", () => {
	// fix me

})
