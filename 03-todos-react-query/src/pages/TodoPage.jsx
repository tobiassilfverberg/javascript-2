import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import TodosAPI from '../services/TodosAPI'
import { useQuery } from 'react-query'

const TodoPage = () => {
	const { id } = useParams()
	const {data, error, isError, isLoading, isSuccess} = useQuery(['todo', {id}], TodosAPI.getTodo)

	// Toggle the completed status of a todo in the api
	// const toggleTodo = async () => {
	// 	await TodosAPI.updateTodo(id, {
	// 		completed: !data.completed
	// 	})
	// 	getTodo(id)
	// }

	return (
		<>
			{isLoading && (
				<div>
					Loading...
				</div>
			)}

			{isError && (<p>An error occured: {error.message}</p>)}

			{isSuccess && (
				<div>
					<h1>{data.title}</h1>

					<p><strong>Status:</strong> {data.completed ? 'Completed' : 'Not completed'}</p>
		
					<Button variant="success" /* onClick={toggleTodo} */>Toggle</Button>
					<Button variant="warning" as={Link} to={`/todos/${id}/edit`}>Edit</Button>
				</div>
			)}	
		</>
	)
}

export default TodoPage
