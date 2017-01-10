export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export function login(email, name) {
    return dispatch => {
        dispatch({
            type: LOGIN,
            data: {
                email,
                name
            }
        })
    }
}


export function logout(email, name) {
    return dispatch => {
        dispatch({
            type: LOGOUT,
        })
    }
}

