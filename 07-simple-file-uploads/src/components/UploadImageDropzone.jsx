import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'
import useUploadImage from '../hooks/useUploadImage'

const UploadImageDropzone = () => {
	const uploadImage = useUploadImage()

	const onDrop = useCallback((acceptedFiles) => {
		console.log("Got me some files", acceptedFiles)

		if (!acceptedFiles.length) {
			return
		}

		uploadImage.mutate(acceptedFiles[0])
	}, [])

	const { 
		getRootProps, 
		getInputProps, 
		isDragActive, 
		isDragAccept, 
		isDragReject,
	} = useDropzone({ 
		accept: {
			'image/*': ['.gif', '.jpeg', '.jpg', '.png', '.webp'],
		}, 
		onDrop, 
	 })

	 const cssClasses = classNames({
		'drag-accept': isDragAccept,
		'drag-reject': isDragReject,
	 })
	
	return (
		<div {...getRootProps()} id="upload-image-dropzone-wrapper" className={cssClasses}>
			<input {...getInputProps()} />
			{
				isDragActive 
					? isDragAccept 
						? <p> Drop it like it's hot </p>
						: <p> We don't want that file </p>
					: <p> Give me some files </p>
			}
		</div>
	)
}

export default UploadImageDropzone