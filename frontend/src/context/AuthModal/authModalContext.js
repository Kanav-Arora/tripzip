import { createContext, useContext, useReducer } from 'react';

import { authModalReducer } from './authModalReducer';

const AuthModalContext = createContext();

const initialState = {
    visible: false,
    type: null,
};

const AuthModalProvider = ({ children }) => {
    const [authModalState, authModalDispatch] = useReducer(
        authModalReducer,
        initialState
    );
    return (
        <AuthModalContext.Provider
            value={{ authModalState, authModalDispatch }}
        >
            {children}
        </AuthModalContext.Provider>
    );
};

export const useAuthModal = () => {
    const context = useContext(AuthModalContext);
    if (!context) {
        throw new Error(
            'useAuthModal must be used within an AuthModalProvider'
        );
    }
    return context;
};

export { AuthModalProvider, AuthModalContext };
