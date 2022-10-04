import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Todo } from '../shared/interfaces'
import { Todos } from '../shared/types'

interface Props {
	todos: Todos,
	onToggleTodo: (todo: Todo) => void,
}

const TodoList: React.FunctionComponent<Props> = ({ todos, onToggleTodo }) => {
	return (
		<ListGroup>
			{todos.map(todo => (
				<ListGroupItem
					action
					key={todo.id}
					onClick={() => onToggleTodo(todo)}
				>
					{todo.title}
					{todo.completed ? <em>(completed)</em>: ''}
				</ListGroupItem>
			))}
		</ListGroup>
	)
}

export default TodoList
