import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import Navigation from './components/Navigation'
import AuthorPage from './pages/AuthorPage'
import AuthorsPage from './pages/AuthorsPage'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/authors" element={<AuthorsPage />} />
				<Route path="/authors/:id" element={<AuthorPage />} />
				<Route path="/books" element={<BooksPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools />
			<ToastContainer />
		</div>
	)
}

export default App
