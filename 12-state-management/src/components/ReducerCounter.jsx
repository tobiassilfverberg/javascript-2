import { startTransition } from 'react'
import { useReducer } from 'react'
import Button from 'react-bootstrap/Button'

const initialState = {
	count: 0,
}

const reducer = (state, action) => {
	console.log("Got request for action:", action)
	console.log("State is currently:", state)

	switch (action.type) {
		case 'increment':
			// increment count
			return {
				count: state.count + 1
			}
		case 'decrement':
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
			<Button variant="warning" onClick={() => dispatch( { type: 'decrement' } )}>-</Button>

			<span className="points">{state.count}</span>

			<Button variant="success" onClick={() => dispatch( { type: 'increment' } )}>+</Button>
		</div>
	)
}

export default ReducerCounter
