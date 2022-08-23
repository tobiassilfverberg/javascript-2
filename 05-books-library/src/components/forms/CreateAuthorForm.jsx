import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import BooksAPI from '../../services/BooksAPI'

const CreateAuthorForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const queryClient = useQueryClient()
	const createAuthorMutation = useMutation(BooksAPI.createAuthor, {
		onSuccess: () => {
			// invalidate data
			queryClient.invalidateQueries("authors")
		}
	})

	const onCreateAuthor = data => {
		// run mutation
		createAuthorMutation.mutate(data)

	}

	return (
		<Form onSubmit={handleSubmit(onCreateAuthor)}>
			{createAuthorMutation.isSuccess && <Alert variant="success">Author created</Alert>}
			{createAuthorMutation.isError && <Alert variant="warning">An error occured</Alert>}

			<Form.Group className='mb-3' controlId='name'>
				<Form.Label>Author Name</Form.Label>
				<Form.Control
					{...register('name', { 
						required: "You need to enter a name", 
						minLength: {
							value: 3,
							message: "The name is to short",
						},
					})}
					type='text'
					placeholder='Astrid Lindgren'
				/>
				{errors.name && <div className='invalid'>{errors.name.message}</div>}
			</Form.Group>

			<Form.Group className='mb-3' controlId='date_of_birth'>
				<Form.Label>Date of Birth</Form.Label>
				<Form.Control
					{...register('date_of_birth', { 
						required: "Please specify the authors date of birth",
					})}
					type='date'
				/>
				{errors.date_of_birth && <div className='invalid'>{errors.date_of_birth.message}</div>}
			</Form.Group>

			<Button variant='success' type='submit'>Create</Button>
		</Form>
	)
}

export default CreateAuthorForm
