import { createContext, useReducer } from "react";

import { authReducer } from "./authReducer";

const AuthContext = createContext();

const initialState = {
    authorised: false,
    user: null
}

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    <AuthContext.Provider value={{ state, dispatch }}>
        {children}
    </AuthContext.Provider>
}

export { AuthProvider, AuthContext };