import React from 'react'

import Day from '../../../components/Add Trip/Day'
import Title from '../../../components/Title';
import Heading from '../../../components/Heading';

export default function Page2(props) {

    const handleAddDay = () => {
        props.handler(prevDays => [...prevDays, [prevDays.length + 1, '']]);
    };

    const handleDeleteDay = (dayNo) => {
        props.handler(prevDays => {
            const updatedDays = prevDays.filter(([day]) => day !== dayNo);
            return updatedDays.map(([day, content], index) => [index + 1, content]);
        });
    };

    const updateText = (dayNo, newText) => {
        props.handler(prevDays => {
            for (let i = 0; i < prevDays.length; i++) {
                const [prevDayNo, newText] = prevDays[i];
                if (prevDayNo === dayNo) {
                    prevDays[i] = [prevDayNo, newText];
                    return;
                }
            }
        });
    };

    return (
        <>
            <Title text="Create a trip" isBold fontSize="1.25rem" className="mb-8" />
            <div className="my-2">
                <div className='flex flex-row items-center justify-between'>
                    <Heading text="Trip Itenary" className='font-medium mb-2' subText="- Optional" subTextStyle="text-gray-400" />
                    <button
                        className="px-3 my-4 border shadow-sm border-gray-300 rounded-md"
                        onClick={handleAddDay}
                    >
                        Add Day
                    </button>
                </div>
            </div>
            <div className="h-[calc(100%-60px)] overflow-y-auto max-h-[calc(100vh-500px)]">
                {props.inputs.map(([dayNo, textInput]) => (
                    <Day key={dayNo} dayNo={dayNo} onDelete={handleDeleteDay} textInput={textInput} updateText={updateText} />
                ))}
            </div >
        </>
    )
}
