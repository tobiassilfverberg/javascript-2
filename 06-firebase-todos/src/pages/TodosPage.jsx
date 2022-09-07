import Container from 'react-bootstrap/Container'
import CreateTodoForm from '../components/CreateTodoForm'
import TodoList from '../components/TodoList'
import { collection, orderBy, query, where } from 'firebase/firestore'
import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'

const TodosPage = () => {
	const { currentUser } = useAuthContext()

	const queryRef = query(
		collection(db, 'todos'),
		where('uid', '==', currentUser.uid),
		orderBy('title'),
	)
	const { data: todos, isLoading } = useFirestoreQueryData(['todos', {uid: currentUser.uid} ], queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return (
		<Container className="py-3">

			<div className="d-flex justify-content-between align-items-start mb-3">
				<h1>Todos</h1>
			</div>

			{isLoading && (<p>Loading data...</p>)}

			{!isLoading && <TodoList todos={todos} />}

			<hr className="my-4" />

			<h2>Create New Todo</h2>
			<CreateTodoForm />

		</Container>
	)
}

export default TodosPage
