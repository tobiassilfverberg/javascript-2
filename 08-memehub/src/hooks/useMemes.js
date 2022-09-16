import { useFirestoreQueryData } from '@react-query-firebase/firestore'
import { collection, query, orderBy, where } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'

const useMemes = (options = {}) => {
	const { currentUser } = useAuthContext()

	// create ref to collecton 'images'
	const collectionRef = collection(db, 'memes')

	const queryKey = options.fetchOnlyCurrentUsersMemes
		? ['memes', currentUser.uid]
		: ['memes']

	// sort by created
	const queryRef = options.fetchOnlyCurrentUsersMemes
		? query(collectionRef, where('user', '==', currentUser.uid), orderBy('created', 'desc'))
		: query(collectionRef, orderBy('created', 'desc'))

    // run query
	const memesQuery = useFirestoreQueryData(queryKey, queryRef, {
		idField: 'id',
		subscribe: true,
	})

	return memesQuery
}

export default useMemes