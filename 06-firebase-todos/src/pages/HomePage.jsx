import Container from 'react-bootstrap/Container'
import AddTodo from '../components/AddTodo'

const HomePage = () => {
	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
			<AddTodo />
		</Container>
	)
}

export default HomePage
