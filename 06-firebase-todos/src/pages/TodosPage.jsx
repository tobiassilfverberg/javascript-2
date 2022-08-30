import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const todos = [
	{
		id: '14c9b3244b4a',
		title: 'Learn React 😊',
		completed: true,
	},
	{
		id: '5e584050fc4f',
		title: 'Learn Firebase 🔥',
		completed: false,
	},
	{
		id: 'd3329c34dc67',
		title: 'Profit 💰',
		completed: false,
	},
	{
		id: '44fd9cc7e1a4',
		title: 'Take over the world 😈',
		completed: false,
	}
]

const TodosPage = () => {
	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-start mb-3">
				<h1>Todos</h1>
				<Button onClick={() => {}}>Refresh</Button>
			</div>

			<ListGroup>
				{todos.map((todo, index) => (
					<ListGroup.Item
						action
						as={Link}
						to={`/todos/${todo.id}`}
						key={index}
					>
						{todo.title}
					</ListGroup.Item>
				))}
			</ListGroup>

		</Container>
	)
}

export default TodosPage
