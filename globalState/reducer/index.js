import { combineReducers } from "redux"

import { LoginReducer } from './AuthReducer'

const reducer = combineReducers({
    login : LoginReducer,
})

export default reducer