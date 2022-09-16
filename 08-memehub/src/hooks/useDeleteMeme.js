import { useState } from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { ref, deleteObject } from 'firebase/storage'
import { db, storage } from '../firebase'
import { useAuthContext } from '../contexts/AuthContext'

const useDeleteImage = () => {
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(false)
	const [isMutating, setIsMutating] = useState(false)
	const { currentUser } = useAuthContext()

	const mutate = async (image) => {
		setError(null)
		setIsError(false)
		setIsMutating(true)

		// run mutation that will delete image from storage and db
		try {
			// verify that the current user acutally owns this image before deleting it
			if (image.user !== currentUser.uid) {
				throw new Error("This meme does not belong to you")
			}

			// get ref to image in storage
			const storageRef = ref(storage, image.path)

			// delete image from storage
			await deleteObject(storageRef)

			// get ref to image in db
			const dbRef = doc(db, 'memes', image.id)

			// delete image from db
			await deleteDoc(dbRef)

		} catch (e) {
			setIsError(true)
			setError(e)

			toast.danger(e)
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
