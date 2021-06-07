import {authAPI} from '../../api/api';

const SET_AUTH_USER_DATA = 'SET_USER_DATA';
// const USER_LOGIN = 'USER_LOGIN';
// const USER_LOGOUT = 'USER_LOGOUT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, ...action.payload}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA, payload: {
        id, email, login, isAuth
    }
})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.resultCode === 0) {
                const {id, email, login} = response.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const userLogin = (authData, setStatus) => (dispatch) => {
    authAPI.login(authData)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                setStatus(response.messages);
            }
        })
}

export const userLogout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer