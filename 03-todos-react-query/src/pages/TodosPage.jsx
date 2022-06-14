import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import TodosAPI from '../services/TodosAPI'
import { useQuery } from 'react-query'
// import FadeLoader from 'react-spinners/FadeLoader'

const TodosPage = () => {
	const getTodos = async () => {
		// Get todos from api
		const data = await TodosAPI.getTodos()

		// sort alphabetically by title
		data.sort((a,b) => a.title.localeCompare(b.title))

		// sort by completed status
		data.sort((a,b) => a.completed - b.completed)

		// update todos state
		return data
	}

	const {data, isError, error, isLoading } = useQuery('todos', getTodos)

	return (
		<>
			<h1>Todos</h1>

			{isLoading && (
				<div>
					Loading...
				</div>
			)}

			{isError && (<p>An error occured: {error.message}</p>)}

			{data && (
				<ListGroup className="todolist">
					{data.map(todo =>
						<ListGroup.Item
							action
							as={Link}
							className={todo.completed ? 'done' : ''}
							key={todo.id}
							to={`/todos/${todo.id}`}
						>
							{todo.title}
						</ListGroup.Item>
					)}
				</ListGroup>
			)}

			{!data && !isLoading && (
				<p className="status">No todos 🥳!</p>
			)}
		</>
	)
}

export default TodosPage;
