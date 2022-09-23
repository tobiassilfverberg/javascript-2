import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodosPage from '../TodosPage'

const addTodos = async (todos) => {
	// find form elements
	const inputNewTodoTitle = screen.getByRole('textbox')
	const btnAddNewTodo = screen.getByRole('button', { name: /add/i })

	// type into form and click the add-button
	for (const todo of todos) {
		await userEvent.type(inputNewTodoTitle, todo)
		await userEvent.click(btnAddNewTodo)
	}
}

test("todo list is initially empty", () => {
	render(<TodosPage />)

	// find any listitem elements
	const listitemEls = screen.queryAllByRole('listitem')

	// expect list to be empty
	expect(listitemEls.length).toBe(0)
})

test("can add a new todo", async () => {
	render(<TodosPage />)

	const newTodoTitle = 'A new todo'
	await addTodos([newTodoTitle])

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

test("should render multiple todos", async () => {
	render(<TodosPage />)

	await addTodos(['Todo 1', 'Todo 2', 'Todo 3'])

	// assert that there has been 3 todos added to the list
	const listitemEls = screen.getAllByRole('listitem')
	expect(listitemEls.length).toBe(3)
})

test("should be able to add to existing list of todos", async () => {
	render(<TodosPage />)

	// create initial todos
	await addTodos(['Todo 1', 'Todo 2', 'Todo 3'])

	// find all the elements with role 'listitem'
	const initialListitemEls = screen.getAllByRole('listitem')  // <-- todos before adding more

	// add more todos
	await addTodos(['Todo 4', 'Todo 5'])

	// assert that 2 new todos has been added
	const listitemEls = screen.getAllByRole('listitem')  // <-- todos + the new ones
	expect(listitemEls.length).toBe(initialListitemEls.length + 2)
})

test("counter is updated when a new todo is added", async () => {
	render(<TodosPage />)

	await addTodos(['Todo 1', 'Todo 2', 'Todo 3'])

	// assert that counter states "3 todos left"
	const counterEl = screen.getByTestId('todo-counter')
	expect(counterEl).toHaveTextContent(/3 todos left/i)
})

test("a todo changes status when clicked", async () => {
	render(<TodosPage />)

	const newTodoTitle = 'A new todo'
	await addTodos([newTodoTitle])

	// find the newly added todo element
	const newTodoEl = screen.getByText(newTodoTitle)

	// click on the new todo
	await userEvent.click(newTodoEl)

	// assert that the todo has class completed
	expect(newTodoEl.parentElement).toHaveClass('completed')
})

