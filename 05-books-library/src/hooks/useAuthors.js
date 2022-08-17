import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'

const useAuthors = () => {
	return useQuery('authors', BooksAPI.getAuthors)
}

export default useAuthors
