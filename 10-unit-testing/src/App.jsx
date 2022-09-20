import Container from 'react-bootstrap/Container'
import TodoCounter from './components/TodoCounter'
import './assets/scss/App.scss'

const App = () => {
	return (
		<Container className="my-5">
			<TodoCounter />
		</Container>
	)
}

export default App
