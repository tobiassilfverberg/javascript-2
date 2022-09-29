import { Routes, Route } from 'react-router-dom'
import Navigation from './pages/partials/Navigation'
import AccountPage from './features/account/AccountPage'
import TodosPage from './features/todos/TodosPage'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound'
import './assets/scss/App.scss'

const App = () => {
	return (
		<>
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/account" element={<AccountPage />} />
				<Route path="/todos" element={<TodosPage />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	)
}

export default App
