import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useState, useEffect } from 'react'

const useGetCollection = (col) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getSnapshot = async () => {
			setLoading(true)

			const ref = collection(db, col)
			const snapshot = await getDocs(ref)
		
			const data = snapshot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(), // title, completed
				}
			})

			setData(data)
			setLoading(false)
		}

		getSnapshot()
	}, [])

	return {
		data, 
		loading
	}
}

export default useGetCollection