import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useGetTodo from '../hooks/useGetTodo'
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase'

const TodoPage = () => {
	const { id } = useParams()
	const { data, loading } = useGetTodo(id)
	const navigate = useNavigate()

	const deleteTodo = async () => {
		await deleteDoc(doc(db, 'todos', id))

		toast.success("Todo deleted!")

		navigate("/todos", { replace : true })
	}

	const toggleTodo = async () => {
			await updateDoc(doc(db, 'todos', id), {
				completed: !data.completed
			})
	}
	
	return (
		<Container className="py-3">

			{loading && (<p>Loading todo...</p>)}

			<div className="d-flex justify-content-between align-items-start mb-3">
				{data && (<h1>{data.title}</h1>)}
			</div>

			{data && (<p>Status: {data.completed ? "Completed" : "Not completed"} </p>)}

			<ButtonGroup className="todo-actions">
				<Button variant="primary" onClick={toggleTodo}>Toggle</Button>
				<Button variant="danger" onClick={deleteTodo}>Delete</Button>
			</ButtonGroup>

		</Container>
	)
}

export default TodoPage
