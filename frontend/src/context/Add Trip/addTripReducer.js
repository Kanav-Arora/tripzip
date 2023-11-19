export const addTripReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_LOCATION":
            return {
                ...state,
                location: action.payload,
            };
        case "UPDATE_DESCRIPTION":
            return {
                ...state,
                description: action.payload,
            };
        case "ADD_DAY":
            return {
                ...state,
                days: [...state.days, [state.days.length + 1, ""]],
            };
        case "DELETE_DAY":
            return {
                ...state,
                days: state.days.filter(([day]) => day !== action.payload),
            };
        case "UPDATE_DAY_TEXT":
            return {
                ...state,
                days: state.days.map(([dayNo, content]) =>
                    dayNo === action.payload.dayNo
                        ? [dayNo, action.payload.newText]
                        : [dayNo, content]
                ),
            };
        case "NEXT_PAGE":
            return {
                ...state,
                currentStep: state.currentStep + 1,
            };
        case "PREV_PAGE":
            return {
                ...state,
                currentStep: state.currentStep - 1,
            };
        default:
            return state;
    }
};
