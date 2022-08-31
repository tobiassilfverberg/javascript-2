import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import useGetTodos from '../hooks/useGetTodos'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

const TodosPage = () => {
	const { data: todos, loading } = useGetTodos()

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-start mb-3">
				<h1>Todos</h1>
			</div>

			{loading && (<p>Loading data... </p>)}

			{!loading && (<TodoList todos={todos}/>)}

			<hr /> 

			<AddTodo /> 

		</Container>
	)
}

export default TodosPage
