import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

const useGetDocument = async (collection, id) => {
	// get reference to doc 'todos' 
	const ref = doc(db, collection, id)
	const snapshot = await getDoc(ref)

	return snapshot.data()
}

export default useGetDocument