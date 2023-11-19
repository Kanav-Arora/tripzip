const loginAction = (user) => {
    return {
        type: 'LOGIN',
        payload: {
            uid: user.uid,
            name: user.name,
            userDetailsID: user.userDetailsID,
        },
    };
};

const logoutAction = () => {
    return {
        type: 'LOGOUT',
    };
};

export { loginAction, logoutAction };