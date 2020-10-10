import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';

const rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    usersReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type StoreReduxType = typeof store

export let store = createStore(rootReducer)




