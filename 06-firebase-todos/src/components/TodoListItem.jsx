import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const TodoListItem = ({ todo }) => {
	return (
		<ListGroup.Item
			action
			as={Link}
			to={`/todos/${todo.id}`}
		>
			{todo.title}
		</ListGroup.Item>
	)
}

export default TodoListItem