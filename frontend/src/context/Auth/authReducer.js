export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                uid: action.payload.uid,
                name: action.payload.name,
                userDetailsID: action.payload.userDetailsID,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                uid: null,
                name: null,
                userDetailsID: null,
            };
        default:
            return state;
    }
};