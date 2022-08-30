import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import useGetTodo from '../hooks/useGetTodo'

const TodoPage = () => {
	const { id } = useParams()
	
	const [todo, setTodo] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getSnapshot = async () => {
			setLoading(true)
			const data = await useGetTodo(id)

			setTodo(data)
			setLoading(false)
		}

		getSnapshot()
	}, [])

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-start mb-3">
				{todo && (<h1>{todo.title}</h1>)}

				<Button onClick={() => {}}>Refresh</Button>
			</div>

			<ButtonGroup className="todo-actions">
				<Button variant="primary" onClick={() => {}}>Toggle</Button>
				<Button variant="danger" onClick={() => {}}>Delete</Button>
			</ButtonGroup>

		</Container>
	)
}

export default TodoPage
