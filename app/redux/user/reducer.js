import { LOGIN, LOGOUT } from './action';

const initialState = {
    user: {
        name: null,
        email: null,
        isLoggedIn: null
    }
};


export default function (state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN:
            const {email, name} = action.data;
            const user = {
                email,
                name,
                isLoggedIn: true
            }
            return {
                ...state,
                ...user
            }

        case LOGOUT:
            return {
                ...state,
                ...initialState.user
            }

        default: return state;
    }
}