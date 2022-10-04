import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import TodoList from './components/TodoList'
import { Todo } from './shared/interfaces'
import { Todos } from './shared/types'
import './assets/scss/App.scss'

const initialTodos: Todos = [
	{ id: 1, title: "Learn TypeScript", completed: true, description: "yas", owner: "FED21M" },
	{ id: 2, title: "Learn about arrays in TS", completed: false, owner: false }
]

function App() {
	// const [todos, setTodos] = useState<Todos>([])  // only do this is initial state is empty array
	const [todos, setTodos] = useState(initialTodos)

	const handleToggleTodo = (todo: Todo) => {
		todo.completed = !todo.completed
		setTodos([...todos])
	}

	return (
		<Container id="App" className="py-3">
			<h1>Todos</h1>

			<TodoList todos={todos} onToggleTodo={handleToggleTodo} />
		</Container>
	)
}

export default App
