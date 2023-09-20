const loginAction = (user) => {
    return {
        type: 'LOGIN',
        payload: user,
    };
};

const logoutAction = () => {
    return {
        type: 'LOGOUT',
    };
};

export { loginAction, logoutAction };