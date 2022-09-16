import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import RequireAuth from './components/RequireAuth'
import Navigation from './pages/partials/Navigation'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import MyMemesPage from './pages/MyMemesPage'
import NotFound from './pages/NotFound'
import SignupPage from './pages/SignupPage'
import UpdateProfilePage from './pages/UpdateProfilePage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				{/* Guest routes */}
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/logout" element={<LogoutPage />} />
				<Route path="/signup" element={<SignupPage />} />

				{/* Protected routes */}
				<Route path="/my-memes" element={
					<RequireAuth>
						<MyMemesPage />
					</RequireAuth>
				} />

				<Route path="/update-profile" element={
					<RequireAuth>
						<UpdateProfilePage />
					</RequireAuth>
				} />
			</Routes>

			<ToastContainer autoClose={3000} />
			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
