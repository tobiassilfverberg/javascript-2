import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import RandomDadJokePage from './pages/RandomDadJokePage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/random-dad-joke" element={<RandomDadJokePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App