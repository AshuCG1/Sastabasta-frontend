import CustomerReducer from './customerLogin'
import AdminReducer from './adminLogin'

import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
    AdminReducer,
    CustomerReducer
})
