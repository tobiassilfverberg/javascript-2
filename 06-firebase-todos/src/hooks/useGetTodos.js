import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const useGetTodos = async () => {
	// get reference to collection 'todos' 
	const ref = collection(db, 'todos')
	const snapshot = await getDocs(ref)

	const data = snapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(), // title, completed
		}
	})

	return data
}

export default useGetTodos