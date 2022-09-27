import { startTransition } from 'react'
import { useReducer } from 'react'
import Button from 'react-bootstrap/Button'

const ACTIONS = {
	ADD: 'add',
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
	RESET: 'reset',
	SUBTRACT: 'subtract',
}

const initialState = {
	count: 0,
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD:
			return {
				count: state.count + action.payload.amount
			}

		case ACTIONS.INCREMENT:
			return {
				count: state.count + 1
			}

		case ACTIONS.DECREMENT:
			return {
				count: state.count - 1
			}

		case ACTIONS.SUBTRACT:
			return {
				count: state.count - action.payload.amount
			}

		case ACTIONS.RESET:
			return initialState

		default:
			// I not know what to do, error
			throw new Error(`Unknown action type: ${action.type}`)
	}
}

const ReducerCounter = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className="reducer-counter">
			<Button variant="warning" onClick={ () => dispatch(
				{ type: ACTIONS.SUBTRACT, payload: { amount: 10 } }
			) }>-10</Button>
			<Button variant="warning" onClick={ () => dispatch(
				{ type: ACTIONS.SUBTRACT, payload: { amount: 5 } }
			) }>-5</Button>
			<Button variant="warning" onClick={ () => dispatch( { type: ACTIONS.DECREMENT } ) }>-</Button>

			<span className="points">{state.count}</span>

			<Button variant="success" onClick={ () => dispatch( { type: ACTIONS.INCREMENT } ) }>+</Button>
			<Button variant="success" onClick={ () => dispatch(
				{ type: ACTIONS.ADD, payload: { amount: 5 } }
			) }>+5</Button>
			<Button variant="success" onClick={ () => dispatch(
				{ type: ACTIONS.ADD, payload: { amount: 10 } }
			) }>+10</Button>

			<Button variant="danger" onClick={ () =>  dispatch( { type: ACTIONS.RESET } ) }>🧹</Button>
		</div>
	)
}

export default ReducerCounter
