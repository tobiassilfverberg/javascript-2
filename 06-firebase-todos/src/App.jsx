import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import NotFound from './pages/NotFound'
import SignupPage from './pages/SignupPage'
import TodoPage from './pages/TodoPage'
import TodosPage from './pages/TodosPage'
import './assets/scss/App.scss'
import RequireAuth from './components/RequireAuth'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				{/* Guest routes */}
				<Route path="*" element={<NotFound />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/logout" element={<LogoutPage />} />
				<Route path="/signup" element={<SignupPage />} />

				{/* Protected routes */}
				<Route path="/" element={
					<RequireAuth>
						<HomePage />
					</RequireAuth>
				} />

				<Route path="/todos" element={
					<RequireAuth>
						<TodosPage />
					</RequireAuth>
				} />

				<Route path="/todos/:id" element={
					<RequireAuth>
						<TodoPage />
					</RequireAuth>
				} />
			</Routes>

			<ToastContainer autoClose={3000} />
			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
