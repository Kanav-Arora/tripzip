import React, { useState, useEffect, useRef } from 'react'
import DateRangeSelector from "../../components/ui/DateRangeSelector/DateRangeSelector"
import { LocationPinMini as LocationIcon, CalendarMini as CalendarIcon, CalendarFilledMini as CalendarFilledIcon } from '../../assets/ext-icon'

export default function InputDialog(props) {
    const [showDateRangePicker, toggleDateRangePicker] = useState(false);
    const [showLocationPicker, toggleLocationPicker] = useState(false);

    const handleDateClick = () => {
        if (showLocationPicker === true) {
            toggleLocationPicker(false);
        }
        toggleDateRangePicker(!showDateRangePicker);
    };

    const handleLocationFieldClick = () => {
        if (showDateRangePicker === true) {
            toggleDateRangePicker(false);
        }
        toggleLocationPicker(!showLocationPicker);
    }

    const defaultSelected = {
        from: null,
        to: null
    };
    const [range, setRange] = useState(defaultSelected);

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    const fromDateRef = useRef("");
    const toDateRef = useRef("");

    useEffect(() => {
        if (range && range.from) {
            fromDateRef.current = formatDate(new Date(range.from));
        }
        if (range && range.to) {
            toDateRef.current = formatDate(new Date(range.to));
        }
    }, [range]);

    return (
        <div className='mobile:hidden absolute shadow-xl rounded-xl bottom-0 -mb-10 left-1/2 transform -translate-x-1/2 w-fit z-10'>
            <div className='flex justify-center bg-white text-black p-3 rounded-xl'>
                <div className='px-3 border-r border-gray-300'>
                    <div className='flex items-center space-x-2 leading-5 pb-2'>
                        <LocationIcon />
                        <span>Location</span>
                    </div>
                    <div className='flex items-center'>
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            className="pl-0.5 w-full min-w-[225px] outline-none focus:border-none"
                        />
                    </div>
                </div>
                <div className='px-3 border-r border-gray-300 pl-5'>
                    <div className='flex items-center space-x-2 leading-5 pb-2'>
                        <CalendarIcon />
                        <span>From Date</span>
                    </div>
                    <div className='flex items-center'>
                        <input
                            type="text"
                            placeholder="Select a date"
                            className="pl-0.5 w-full min-w-[150px] outline-none focus:border-none"
                            readOnly
                            onClick={handleDateClick}
                            value={fromDateRef.current}
                        />
                    </div>
                </div>
                <div className='px-3 pl-5'>
                    <div className='flex items-center space-x-2 leading-5 pb-2'>
                        <CalendarFilledIcon />
                        <span>To Date</span>
                    </div>
                    <div className='flex items-center'>
                        <input
                            type="text"
                            placeholder="Select a date"
                            className="pl-0.5 w-full min-w-[150px] outline-none focus:border-none"
                            readOnly
                            onClick={handleDateClick}
                            value={toDateRef.current}
                        />
                    </div>
                </div>
                <button className="bg-black text-white rounded-lg px-4 py-2 my-auto">Search</button>
            </div>
            {showDateRangePicker &&
                <div className="absolute mt-6 left-[57%] transform -translate-x-1/2 text-white z-10">
                    <DateRangeSelector range={range} setRange={setRange} />
                </div>
            }
        </div>
    )
}
