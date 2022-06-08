import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import './assets/scss/App.scss'
import NotFound from './pages/NotFound'

const App = () => {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App