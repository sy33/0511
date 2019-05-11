import {createStore, combineReducer} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './authReducer'


export function configureStore(){
    return createStore(
        combineReducer({
            auth: authReducer
        }),
        applyMiddleWare(thunk)
        )
}
