import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'

const useAuthor = (id) => {
	return useQuery(['author', id], () => BooksAPI.getAuthor(id))
}

export default useAuthor
