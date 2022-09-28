const initialState = {
	balance: 0,
}

const accountReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'deposit':
			return {
				...state,
				balance: state.balance + 100,
			}

		case 'withdraw':
			return {
				...state,
				balance: state.balance - 100,
			}

		default:
			return state
	}
}

export default accountReducer