import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './profile-reducer'
import {dialogsReducer} from './dialogs-reducer'
import {usersReducer} from './users-reducer'
import {authReducer} from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
	profileState: profileReducer,
	dialogsState: dialogsReducer,
	usersState: usersReducer,
	authState: authReducer,
})

export type GlobalStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

