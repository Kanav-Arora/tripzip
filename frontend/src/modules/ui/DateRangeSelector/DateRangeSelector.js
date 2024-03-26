import React from 'react';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import './day-picker.css';

const currDate = new Date();

export default function DateRangeSelector({ selectedRange, setSelectedRange }) {
    return (
        <div
            className="bg-white text-black shadow-xl h-[375px] p-2 rounded-lg"
            style={{ marginTop: '-20px' }}
        >
            <DayPicker
                id="test"
                mode="range"
                defaultMonth={currDate}
                numberOfMonths={2}
                selected={selectedRange}
                onSelect={setSelectedRange}
                modifiersClassNames={{
                    today: 'my-today',
                }}
            />
        </div>
    );
}
