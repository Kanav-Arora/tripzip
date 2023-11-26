export const authModalReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                visible: true,
                type: action.type,
            };
        case 'SIGNUP':
            return {
                ...state,
                visible: true,
                type: action.type,
            };
        case 'HIDE':
            return {
                ...state,
                visible: false,
                type: null,
            };
        default:
            return state;
    }
};
