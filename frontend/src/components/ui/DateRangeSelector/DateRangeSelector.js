import React from 'react';
import { DayPicker } from 'react-day-picker';

import 'react-day-picker/dist/style.css';
import './day-picker.css';

const currDate = new Date();

export default function DateRangeSelector(props) {
    return (
        <div className='bg-[#333333] text-white h-[350px] pt-1 rounded-lg' style={{ marginTop: '-20px' }}>
            <DayPicker
                id="test"
                mode="range"
                defaultMonth={currDate}
                selected={props.range}
                numberOfMonths={2}
                onSelect={props.setRange}
                modifiersClassNames={{
                    today: 'my-today'
                }}
            />
        </div>
    );
};
