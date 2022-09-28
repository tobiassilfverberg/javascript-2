import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const AccountButtons = () => {
	return (
		<ButtonGroup>
			<Button variant="success" onClick={() => {}}>Deposit</Button>
			<Button variant="warning" onClick={() => {}}>Withdraw</Button>
		</ButtonGroup>
	)
}

export default AccountButtons
