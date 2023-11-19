const updateLocationAction = (location) => {
    return {
        type: 'UPDATE_LOCATION',
        payload: location
    }
}

const updateDescriptionAction = (description) => {
    return {
        type: 'UPDATE_DESCRIPTION',
        payload: description
    }
}

const addDayAction = () => {
    return {
        type: 'ADD_DAY',
    }
}

const deleteDayAction = () => {
    return {
        type: 'DELETE_DAY',
    }
}

const updateDayTextAction = (dayNo, newText) => {
    return {
        type: 'UPDATE_DAY_TEXT',
        payload: {
            dayNo: dayNo,
            newText: newText,
        }
    }
}

const nextPageAction = () => {
    return {
        type: 'NEXT_PAGE',
    }
}

const prevPageAction = () => {
    return {
        type: 'PREV_PAGE',
    }
}

export {
    updateLocationAction,
    updateDescriptionAction,
    addDayAction,
    deleteDayAction,
    updateDayTextAction,
    nextPageAction,
    prevPageAction
};