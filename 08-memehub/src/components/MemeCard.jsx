import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ModalImage from 'react-modal-image'
import { useAuthContext } from '../contexts/AuthContext'
import useDeleteMeme from '../hooks/useDeleteMeme'

const ImageCard = ({ image }) => {
	const { currentUser } = useAuthContext()
	const deleteMemeMutation = useDeleteMeme()

	return (
		<>
			<Card className={`image-card ${deleteMemeMutation.isMutating ? 'mutating' : ''}`}
			>
				<Card.Header>
					<span className="image-filename" title={image.name}>
						{image.name}
					</span>
					<div className="card-actions">
						{image.user === currentUser.uid && (
							<Button
								variant="danger"
								size="sm"
								disabled={deleteMemeMutation.isMutating}
								onClick={() => deleteMemeMutation.mutate(image)}
							>
								<FontAwesomeIcon icon={faTrashAlt} />
							</Button>
						)}
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
