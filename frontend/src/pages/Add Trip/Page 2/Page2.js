import React, { useState } from 'react'

import Day from '../../../components/Add Trip/Day'
import Title from '../../../components/Title';
import Heading from '../../../components/Heading';

export default function Page2() {
    const [days, setDays] = useState([]);

    const handleAddDay = () => {
        setDays(prevDays => [...prevDays, { key: prevDays.length + 1, dayNo: prevDays.length + 1 }]);
    };

    const handleDeleteDay = (dayNo) => {
        setDays(prevDays => {
            const updatedDays = prevDays.filter((day) => day.dayNo !== dayNo);
            return updatedDays.map((day, index) => ({ ...day, dayNo: index + 1 }));
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
                {days.map((object) => {
                    return <Day key={object.key} dayNo={object.dayNo} onDelete={handleDeleteDay} />;
                })}
            </div >
        </>
    )
}
