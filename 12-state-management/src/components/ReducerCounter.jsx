import { startTransition } from 'react'
import { useReducer } from 'react'
import Button from 'react-bootstrap/Button'

const ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
}

const initialState = {
	count: 0,
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			// increment count
			return {
				count: state.count + 1
			}
		case ACTIONS.DECREMENT:
			// decrement counter
			return {
				count: state.count - 1
			}
		default:
			// I not know what to do, error
			throw new Error(`Unknown action type: ${action.type}`)
	}
}

const ReducerCounter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className="reducer-counter">
			<Button variant="warning" onClick={() => dispatch( { type: ACTIONS.DECREMENT } )}>-</Button>

			<span className="points">{state.count}</span>

			<Button variant="success" onClick={() => dispatch( { type: ACTIONS.INCREMENT } )}>+</Button>
		</div>
	)
}

export default ReducerCounter
