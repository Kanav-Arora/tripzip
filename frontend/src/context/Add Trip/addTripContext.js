import { createContext, useReducer } from "react";
import { addTripReducer } from "./addTripReducer";

const AddTripContext = createContext();

const initialState = {
    location: "",
    description: "",
    days: [],
    currentStep: 0,
};

const AddTripProvider = ({ children }) => {
    const [state, dispatch] = useReducer(addTripReducer, initialState);
    return (
        <AddTripContext.Provider value={{ state, dispatch }}>
            {children}
        </AddTripContext.Provider>
    );
};

export { AddTripProvider, AddTripContext };
