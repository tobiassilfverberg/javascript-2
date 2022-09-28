import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useDispatch } from 'react-redux'

const AccountButtons = () => {
	const dispatch = useDispatch()

	return (
		<ButtonGroup>
			<Button variant="success" onClick={() => dispatch({ type: 'deposit' })}>Deposit</Button>
			<Button variant="warning" onClick={() => dispatch({ type: 'withdraw' })}>Withdraw</Button>
		</ButtonGroup>
	)
}

export default AccountButtons
