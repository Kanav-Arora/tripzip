const loginAction = (user) => {
    return {
        type: 'LOGIN',
        payload: {
            uid: user.uid,
            name: user.name,
            userDetailsId: user.userDetailsId,
        },
    };
};

const logoutAction = () => {
    return {
        type: 'LOGOUT',
    };
};

export { loginAction, logoutAction };