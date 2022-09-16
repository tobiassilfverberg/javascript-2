import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, orderBy, where } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'

const useMemes = () => {
	// create ref to collecton 'images'
	const collectionRef = collection(db, 'memes')

	// sort by created
	const queryRef = query(collectionRef, orderBy('created', 'desc'))

    // run query
	const memesQuery = useFirestoreQueryData(['memes'], queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return memesQuery
}

export default useMemes