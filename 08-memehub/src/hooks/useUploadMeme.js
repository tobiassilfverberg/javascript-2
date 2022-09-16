import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { useAuthContext } from '../contexts/AuthContext'
import { db, storage } from '../firebase'

const useUploadMeme = () => {
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(null)
	const [isSuccess, setIsSuccess] = useState(null)
	const [isUploading, setIsUploading] = useState(null)
	const [progress, setProgress] = useState(null)

	const { currentUser } = useAuthContext()

	const upload = async (image) => {
		// reset internal states
		setError(null)
		setIsError(null)
		setIsSuccess(null)
		setIsUploading(null)

		try {
			// create filename to save image as
			const storageFileName = `${Date.now()}-${image.name}`

			// construct reference to storage
			const storageRef = ref(storage, `memes/${storageFileName}`)

			// start upload of image
			const uploadTask = uploadBytesResumable(storageRef, image)

			// attach upload observer
			uploadTask.on('state-changed', (uploadTaskSnapshot) => {
				// update progress
				setProgress(
					Math.round(
							(uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 1000
						) / 10
				)
			})

			// wait for upload to be complete
			await uploadTask.then()

			// get download url to uploaded image
			const url = await getDownloadURL(storageRef)

			// create a reference to db-collection 'memes'
			const collectionRef = collection(db, 'memes')

			// create document in db for the uploaded image
			await addDoc(collectionRef, {
				created: serverTimestamp(),
				name: image.name,
				path: storageRef.fullPath,
				type: image.type,
				size: image.size,
				user: currentUser.uid,
				url,
			})

			// profit
			setProgress(null)
			setIsSuccess(true)

		} catch (e) {
			console.log("Danger will consume you", e)

			setError(e)
			setIsError(true)

		} finally {
			setIsUploading(false)
		}
	}

	return {
		error,
		isError,
		isSuccess,
		isUploading,
		progress,
		upload,
	}
}

export default useUploadMeme