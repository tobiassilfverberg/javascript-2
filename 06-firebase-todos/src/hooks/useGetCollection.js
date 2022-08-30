import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const useGetCollection = async (col) => {
	const ref = collection(db, col)
	const snapshot = await getDocs(ref)

	const data = snapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(), // title, completed
		}
	})

	return data
}

export default useGetCollection