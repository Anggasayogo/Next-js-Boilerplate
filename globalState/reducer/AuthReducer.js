import * as Types from '../constant/actionTypes'

const initialState = {
    login : { data: [], fetching: false, error: null },
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.POST_LOGIN_REQUEST:
            return {
                login : { data: null, fetching: true, error: false }
            }
        case Types.POST_LOGIN_SUCCESS:
            return {
                login : { data: action.payload, fetching: false, error: false }
            }
        case Types.POST_LOGIN_FAILURE:
            return { 
                login : { data: null, fetching: false, error: action.error }
            } 
        default:
            return { ...state }
    }
}

export {
    LoginReducer
};