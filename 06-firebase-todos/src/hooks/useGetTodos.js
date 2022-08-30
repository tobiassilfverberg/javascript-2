
import useGetCollection from './useGetCollection'

const useGetTodos = async () => {
	return await useGetCollection('todos')
}

export default useGetTodos