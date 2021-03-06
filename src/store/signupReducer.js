
const SIGNUP_REQUEST ='SIGNUP_REQUEST';
const SIGNUP_SUCCESS ='SIGNUP_SUCCESS';
const SIGNUP_FAILED ='SIGNUP_FAILED';

function signupRequest(){
    return{
    type: SIGNUP_REQUEST
    }
}

function signupsuccess(){
    return{
    type: SIGNUP_SUCCESS
    }
}

function signupfailed(){
    return{
    type: SIGNUP_FAILED
    }
}

export function signup(){
    return (dispatch)=>{
        dispatch(signupRequest());

        setTimeout(()=>{
            dispatch(signupsuccess());
        },2000)

        //api call

        // 완료 dispatch(signupRequest());

        // 실패 dispatch(signupRequest());
    }
}
const initialState = {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
}

export default function signupReducer(state=initialState, action){
    switch (action.type){
        case SIGNUP_REQUEST:
        return Object.assign({}, state, {
            isLoading: true,
            isSuccess: false,
            isFailed: false,           
        })
        case SIGNUP_SUCCESS:
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: true,
            isFailed: false,           
        })
        case SIGNUP_FAILED:
        return Object.assign({}, state, {
            isLoading: false,
            isSuccess: false,
            isFailed: true,           
        })        
        default:
        return state;
    }
}