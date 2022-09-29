import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid'

const initialState = {
	value: [],
}

export const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: (state, action) => {
			state.value.push({
				id: uuid(),
				name: action.payload,
			})
			return state
		},
		removeEmployee: (state, action) => {
			state.value = state.value.filter(employee => employee.id !== action.payload.id)
			return state
		},
	}
})

// Action creators are generated for each reducer function
export const { addEmployee, removeEmployee } = employeesSlice.actions

// Export the reducer
export default employeesSlice.reducer
