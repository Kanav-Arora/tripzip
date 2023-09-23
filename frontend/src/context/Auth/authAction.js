const loginAction = (user) => {
    return {
        type: 'LOGIN',
        payload: {
            uid: user.id,
            name: user.name
        },
    };
};

const logoutAction = () => {
    return {
        type: 'LOGOUT',
    };
};

export { loginAction, logoutAction };