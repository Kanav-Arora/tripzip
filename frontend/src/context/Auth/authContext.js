import { createContext, useReducer } from "react";

import { authReducer } from "./authReducer";

const AuthContext = createContext();

const initialState = {
    isAuthenticated: true,
    uid: null,
    name: "Kanav Arora"
}

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };