import ACTIONS from "../actions/countActions"

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

export default reducer