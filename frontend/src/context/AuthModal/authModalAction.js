const showModalAction = (type) => {
    return {
        type: type,
    };
};

const hideModalAction = () => {
    return {
        type: 'HIDE',
    };
};

export { showModalAction, hideModalAction };
