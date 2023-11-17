import React, { useContext } from 'react';

import Day from '../../../modules/AddTrip/Day';

import Title from '../../../modules/ui/Title';
import Heading from '../../../modules/ui/Heading';
import { AddTripContext } from '../../../context/Add Trip/addTripContext';
import {
    addDayAction,
    deleteDayAction,
    updateDayTextAction,
} from '../../../context/Add Trip/addTripAction';

export default function Page2() {
    const { state, dispatch } = useContext(AddTripContext);

    const handleAddDay = () => {
        dispatch(addDayAction());
    };

    const handleDeleteDay = (dayNo) => {
        dispatch(deleteDayAction(dayNo));
    };

    const updateText = (dayNo, newText) => {
        dispatch(updateDayTextAction(dayNo, newText));
    };

    return (
        <>
            <Title text="Create a trip" isBold fontSize="1.25rem" className="mb-8" />
            <div className="my-2">
                <div className="flex flex-row items-center justify-between">
                    <Heading
                        text="Trip Itinerary"
                        className="font-medium mb-2"
                        subText="- Optional"
                        subTextStyle="text-gray-400"
                    />
                    <button
                        className="px-3 my-4 border shadow-sm border-gray-300 rounded-md"
                        onClick={handleAddDay}
                    >
                        Add Day
                    </button>
                </div>
            </div>
            <div className="h-[calc(100%-60px)] overflow-y-auto max-h-[calc(100vh-500px)]">
                {state.days.map(([dayNo, textInput]) => (
                    <Day
                        key={dayNo}
                        dayNo={dayNo}
                        onDelete={handleDeleteDay}
                        textInput={textInput}
                        updateText={updateText}
                    />
                ))}
            </div>
        </>
    );
}
