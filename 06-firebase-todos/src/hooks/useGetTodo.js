import useGetDocument from './useGetDocument'

const useGetTodo = async (id) => {
	return await useGetDocument('todos', id)
}

export default useGetTodo