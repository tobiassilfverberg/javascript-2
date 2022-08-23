import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import BooksAPI from '../services/BooksAPI'

const useCreateAuthor = () => {
	const queryClient = useQueryClient()

	return useMutation(BooksAPI.createAuthor, {
		onError: (error) => {
			toast.warning(
				<>
					<strong>Something bad happened</strong> <br />
					{error?.message}
				</>
			)
		}, 

		onSuccess: () => {
			toast.success("Author created!")
			// invalidate data
			queryClient.invalidateQueries("authors")
		}
	})
}

export default useCreateAuthor