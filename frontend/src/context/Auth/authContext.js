import { createContext, useReducer, useContext } from 'react';

import { authReducer } from './authReducer';

const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    uid: null,
    name: null,
    userDetailsId: null,
};

const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(
            'useAuthModal must be used within an AuthModalProvider'
        );
    }
    return context;
};

export { AuthProvider, AuthContext };
