import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { useState, useEffect } from 'react'

const useGetDocument = (collection, id) => {
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)

	const getSnapshot = async () => {
		setLoading(true)

		const ref = doc(db, collection, id)
		const snapshot = await getDoc(ref)

		setData(snapshot.data())
		setLoading(false)
	}

	useEffect(() => {
		getSnapshot()
	}, [])

	return {
		data,
		loading,
		getSnapshot,
	}
}

export default useGetDocument