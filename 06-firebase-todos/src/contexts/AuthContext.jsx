import { createContext, useContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'
import SyncLoader from 'react-spinners/SyncLoader'

const AuthContext = createContext()

const useAuthContext = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logout = () => {
		return signOut(auth)
	}

	const resetPassword = (email) => {
	}

	const setEmail = (email) => {
	}

	const setPassword = (newPassword) => {
	}

	const setDisplayName = (name) => {
	}

	// add auth-state observer here (somehow... 😈)
	useEffect(() => {
		// listen for auth-state changes
		onAuthStateChanged(auth, (user) =>{
			setCurrentUser(user)
			setLoading(false)
		})
	}, [])

	const contextValues = {
		// here be everything the children needs/should be able to use
		currentUser,
		login,
		logout,
		signup,
		resetPassword,
		setDisplayName,
		setEmail,
		setPassword,
	}

	return (
		<AuthContext.Provider value={contextValues}>
			{loading ? (
				<div id="initial-loader">
					<SyncLoader color={'#888'} size={15} />
				</div>
			) : (
				children
			)}
		</AuthContext.Provider>
	)
}

export {
	AuthContextProvider as default,
	useAuthContext,
}
