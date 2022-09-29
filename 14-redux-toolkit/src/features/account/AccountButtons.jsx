import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useDispatch } from 'react-redux'
import { deposit, withdraw } from './accountSlice'

const AccountButtons = () => {
	const dispatch = useDispatch()

	return (
		<ButtonGroup>
			<Button variant="success" onClick={() => dispatch( deposit(5) )}>$5</Button>
			<Button variant="success" onClick={() => dispatch( deposit(1) )}>$1</Button>
			<Button variant="warning" onClick={() => dispatch( withdraw(1) )}>$1</Button>
			<Button variant="warning" onClick={() => dispatch( withdraw(5) )}>$5</Button>
		</ButtonGroup>
	)
}

export default AccountButtons
