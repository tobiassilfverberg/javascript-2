import { useMutation, useQueryClient } from 'react-query'
import BooksAPI from '../services/BooksAPI'

const useCreateAuthor = () => {
	const queryClient = useQueryClient()

	return useMutation(BooksAPI.createAuthor, {
		onSuccess: () => {
			// invalidate data
			queryClient.invalidateQueries("authors")
		}
	})
}

export default useCreateAuthor