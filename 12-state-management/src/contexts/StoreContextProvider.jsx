import { createContext, useContext, useReducer } from 'react'
import countReducer from '../reducers/countReducer'

// define initial state
const initialState = {
	count: 0,
}

// create the store context
const StoreContext = createContext()

// hook that children can use to consume the values provided
export const useStoreContext = () => {
	return useContext(StoreContext)
}

// react funtion component that provides `state´ and `dispatch´ to it's children
const StoreContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(countReducer, initialState)

	return (
		<StoreContext.Provider value={{ state, dispatch }} >
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider