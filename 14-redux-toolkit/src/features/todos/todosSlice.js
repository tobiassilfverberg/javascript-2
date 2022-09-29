import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid'

const initialState = {
	value: [],
}

const initialDemoState = {
	value: [
		{
			id: '14c9b324-4b4a-40dd-a3a5-e23070f42617',
			owner: 'Brunce Banner',
			title: 'Learn React',
			completed: false,
		},
		{
			id: '5e584050-fc4f-4f09-9133-dc2f15d7e036',
			owner: 'Black Widow',
			title: 'Learn Redux',
			completed: false,
		},
		{
			id: 'd3329c34-dc67-4c39-aa7c-1f4e11c2e797',
			owner: 'Loki',
			title: 'Learn React Toolkit',
			completed: false,
		},
		{
			id: '44fd9cc7-e1a4-4756-bbbe-38f43711acaa',
			owner: 'Loki',
			title: 'Take over the world',
			completed: false,
		},
	],
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState: initialDemoState,
	reducers: {
		addTodo: (state, action) => {
			return state
		},
		removeTodo: (state, action) => {
			state.value = state.value.filter(todo => todo.id !== action.payload.id)
			return state
		},
		toggleTodo: (state, action) => {
			const todo = state.value.find(todo => todo.id === action.payload.id)
			todo.completed = !todo.completed
			return state
		},
	}
})

// Action creators are generated for each reducer function
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions

// Export the reducer
export default todosSlice.reducer
