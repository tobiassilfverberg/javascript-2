import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react' 
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import { db } from '../firebase'

const TodosPage = () => {
	const [todos, setTodos] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getSnapshot = async () => {
			setLoading(true)
			// get reference to collection 'todos' 
			const ref = collection(db, 'todos')
			const snapshot = await getDocs(ref)

			const data = snapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(), // title, completed
				}
			})

			setTodos(data)
			setLoading(false)
		}

		getSnapshot()
	}, [])

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-start mb-3">
				<h1>Todos</h1>
				<Button onClick={() => {}}>Refresh</Button>
			</div>

			{loading && (<p>Loading data... </p>)}

			{!loading && 
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
			}

		</Container>
	)
}

export default TodosPage
