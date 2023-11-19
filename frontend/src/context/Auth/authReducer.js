export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                uid: action.payload.uid,
                name: action.payload.name,
                userDetailsId: action.payload.userDetailsId,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                uid: null,
                name: null,
                userDetailsId: null,
            };
        default:
            return state;
    }
};