import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	balance: 42,
}

export const accountSlice = createSlice({
	name: 'account',
	initialState,		// initialState: initialState
	reducers: {
		deposit: (state, action) => {
			// 🥳
			state.balance += action.payload
			return state

			// 🤮
			// return {
			// 	...state,
			// 	balance: state.balance + 1,
			// }
		},

		withdraw: (state, action) => {
			// 🥳
			if (state.balance - action.payload >= 0) {
				state.balance -= action.payload
			}
			return state
		},
	},
})

// Action creators are generated for each reducer function
export const { deposit, withdraw } = accountSlice.actions

// Export the reducer
export default accountSlice.reducer
