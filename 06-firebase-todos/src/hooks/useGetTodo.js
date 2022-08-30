import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const useGetTodo = async (id) => {
	// get reference to doc 'todos' 
	const ref = doc(db, 'todos', id)
	const snapshot = await getDoc(ref)

	return snapshot.data()
}

export default useGetTodo