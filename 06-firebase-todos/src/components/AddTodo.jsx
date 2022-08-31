import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

const AddTodo = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm()

	const onSubmit = async (data) => {
		await addDoc(collection(db, 'todos'), {
			title: data.title,
			completed: false, 
		})

		reset()
	}
	
	return (
		<Form onSubmit={handleSubmit(onSubmit)} noValidate>

			<Form.Group className='mb-3' controlId='title'>
				<Form.Label>Add new todo</Form.Label>
				<Form.Control
					{...register('title', {
						required: 'You give no title?! I no create!',
						minLength: {
							value: 3,
							message: 'That\'s no title (enter at least 2 characters)!',
						},
					})}
					type='text'
					placeholder='Todo Title'
				/>
				{errors.title && <div className='invalid'>{errors.title.message}</div>}
			</Form.Group>

			<Button variant='success' type='submit'>
				Create Todo
			</Button>
		</Form>
	)
}

export default AddTodo