import { Button, ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo } from './todosSlice'

const TodoListItem = ({ todo }) => {
	const dispatch = useDispatch()

	return (
		<ListGroup.Item>
			<div className="d-flex justify-content-between">
				<span className="todo-title">{todo.title} {todo.completed ? <em>(completed)</em> : ''}</span>
				<div className="todo-actions">
					<Button variant="primary" onClick={() => dispatch( toggleTodo(todo) )}>Toggle</Button>
					<Button variant="danger" onClick={() => dispatch( removeTodo(todo) )}>Delete</Button>
				</div>
			</div>
		</ListGroup.Item>
	)
}

export default TodoListItem
