import { useCallback } from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'
import useUploadMeme from '../hooks/useUploadMeme'
// import imgAccept from '../assets/images/accept.gif'
// import imgDrop from '../assets/images/drop.gif'
// import imgReject from '../assets/images/reject.gif

const UploadMeme = () => {
	const uploadMeme = useUploadMeme()

	const onDrop = useCallback((acceptedFiles) => {
		if (!acceptedFiles.length) {
			return
		}

		// trigger upload of the first meme
		uploadMeme.upload(acceptedFiles[0])
	}, [])

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		accept: {
			'image/gif': [],
			'image/png': [],
			'image/jpg': [],
			'image/jpeg': [],
			'image/webp': [],
		},
		maxFiles: 1,
		maxSize: 4 * 1024 * 1024,
		onDrop,
	})

	const dropzoneWrapperClasses = classNames({
		'drag-accept': isDragAccept,
		'drag-reject': isDragReject,
	})

	return (
		<>
			<div {...getRootProps()} id="dropzone-wrapper" className={dropzoneWrapperClasses} >
				<input {...getInputProps()} />

				<div className="indicator">
					{
						isDragActive
							? isDragAccept
								? <p>Yes please</p> // <Image src={imgAccept} fluid />
								: <p>k thx bye</p> // <Image src={imgReject} fluid />
							: <p>Drop it</p> // <Image src={imgDrop} fluid />
					}
				</div>

				{/* Upload progess bar */}
				{uploadMeme.progress !== null && (
					<ProgressBar
						variant='success'
						animated
						now={uploadMeme.progress}
						label={`${uploadMeme.progress}%`}
					/>
				)}

				{uploadMeme.isError && <Alert variant='danger'>{uploadMeme.error.message}</Alert>}
				{uploadMeme.isSuccess && <Alert variant='success'>Good meme!</Alert>}
			</div>
		</>
	)
}

export default UploadMeme
