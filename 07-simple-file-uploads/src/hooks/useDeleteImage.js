import { useState } from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import { db, storage } from '../firebase'

const useDeleteImage = () => {
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState(null)
	const [isMutating, setIsMutating] = useState(false)

	const mutate = async (image) => {
		setError(null)
		setIsError(false)
		setIsMutating(true)

		// run mutation that will delete image from storage and db
		try {
			// get ref to image in storage
			const storageRef = ref(storage, image.path)

			// delete image from storage
			await deleteObject(storageRef)

			// get ref to image in db
			const dbRef = doc(db, 'images', image.id)

			// delete image from db
			await deleteDoc(dbRef)

		} catch (e) {
			setIsError(true)
			setError(e)
		} finally {
			setIsMutating(false)
		}
	}

	return {
		error,
		isError,
		isMutating,
		mutate,
	}
}

export default useDeleteImage
