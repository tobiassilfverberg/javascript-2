import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useDispatch } from 'react-redux'
import { accountActionCreators } from '../state/action-creators'

const AccountButtons = () => {
	const dispatch = useDispatch()
	const { depositMoney, withdrawMoney } = accountActionCreators

	return (
		<ButtonGroup>
			<Button variant="success" onClick={() => dispatch(depositMoney(500))}>+500</Button>
			<Button variant="success" onClick={() => dispatch(depositMoney(250))}>+250</Button>
			<Button variant="warning" onClick={() => dispatch(withdrawMoney(250))}>-250</Button>
			<Button variant="warning" onClick={() => dispatch(withdrawMoney(100))}>-100</Button>
		</ButtonGroup>
	)
}

export default AccountButtons
