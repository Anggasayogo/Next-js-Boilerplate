import api from '../../service/apiMidleware'
import * as Types from '..//constant/actionTypes'

export const postLoginRequest = ()=> ({
    type : Types.POST_LOGIN_REQUEST
})

export const postLoginSuccess = (detail)=> ({
    type : Types.POST_LOGIN_SUCCESS,
    payload : detail 
})

export const postLoginFailure = (error)=> ({
    type : Types.POST_LOGIN_FAILURE,
    error : error
})

const loginActions =  (data)=>{
    return async (dispatch) => {
        dispatch(postLoginRequest())
        api.postLogin(data)
        .then((response)=> {
            dispatch(postLoginSuccess(response?.data))
        })
        .catch((error) =>{ 
            dispatch(postLoginFailure(error))
        })
    }
}

export {
 loginActions   
}