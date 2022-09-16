import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ModalImage from 'react-modal-image'
// import useDeleteImage from '../hooks/useDeleteImage'

const ImageCard = ({ image }) => {
	// const deleteImageMutation = useDeleteImage()

	return (
		<>
			<Card
				// className={`image-card ${deleteImageMutation.isMutating ? 'mutating' : ''}`}
				className={`image-card`}
			>
				<Card.Header>
					<span className="image-filename" title={image.name}>
						{image.name}
					</span>
					<div className="card-actions">
						{/* <Button
							variant="danger"
							size="sm"
							disabled={deleteImageMutation.isMutating}
							onClick={() => deleteImageMutation.mutate(image)}
						>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button> */}
					</div>
				</Card.Header>

				<ModalImage
					small={image.url}
					large={image.url}
					className='card-img-top'
				/>

				<Card.Footer>
					{Math.round(image.size / 1024)} kB
				</Card.Footer>
			</Card>
		</>
	)
}

export default ImageCard
