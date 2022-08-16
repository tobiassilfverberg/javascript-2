import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'

const useBooks = () => {
	return useQuery('books', BooksAPI.getBooks)
}

export default useBooks