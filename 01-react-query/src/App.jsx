import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ICanHazDadJokePage from './pages/ICanHazDadJokePage'
import RandomDadJokePage from './pages/RandomDadJokePage'
import JokePage from './pages/JokePage'
import RandomDog from './pages/RandomDog'
import './assets/scss/App.scss'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/i-can-haz-dad-joke" element={<ICanHazDadJokePage />} />
				<Route path="/random-dad-joke" element={<RandomDadJokePage />} />
				<Route path="/random-dog" element={<RandomDog />} />
				<Route path="/joke/:type" element={<JokePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
