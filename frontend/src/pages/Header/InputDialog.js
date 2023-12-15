import React, { useState, useEffect, useRef } from 'react';
import DateRangeSelector from '../../modules/ui/DateRangeSelector/DateRangeSelector';
import { useDateRangeSelector } from '../../modules/ui/DateRangeSelector/hooks/useDateRangeSelector';
import {
    LocationPinMini as LocationIcon,
    CalendarMini as CalendarIcon,
    CalendarFilledMini as CalendarFilledIcon,
} from '../../assets/ext-icon';
import LocationPicker from '../../modules/Header/LocationPicker/LocationPicker';

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
    };

    const { selectedRange } = useDateRangeSelector();

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };
    return (
        <div className="mobile:hidden absolute shadow-xl rounded-xl bottom-0 -mb-10 left-1/2 transform -translate-x-1/2 w-fit z-10">
            <div className="flex justify-center bg-white text-black p-3 rounded-xl">
                <div className="px-3 border-r border-gray-300">
                    <div className="flex items-center space-x-2 leading-5 pb-2">
                        {/* <LocationIcon /> */}
                        <span>Location</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            className="pl-0.5 w-full min-w-[225px] outline-none focus:border-none"
                            onClick={handleLocationFieldClick}
                        />
                    </div>
                </div>
                <div className="px-3 border-r border-gray-300 pl-5">
                    <div className="flex items-center space-x-2 leading-5 pb-2">
                        {/* <CalendarIcon /> */}
                        <span>From Date</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Select a date"
                            className="pl-0.5 w-full min-w-[150px] outline-none focus:border-none"
                            readOnly
                            onClick={handleDateClick}
                            value={
                                selectedRange.from
                                    ? formatDate(new Date(selectedRange.from))
                                    : ''
                            }
                        />
                    </div>
                </div>
                <div className="px-3 pl-5">
                    <div className="flex items-center space-x-2 leading-5 pb-2">
                        {/* <CalendarFilledIcon /> */}
                        <span>To Date</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Select a date"
                            className="pl-0.5 w-full min-w-[150px] outline-none focus:border-none"
                            readOnly
                            onClick={handleDateClick}
                            value={
                                selectedRange.to
                                    ? formatDate(new Date(selectedRange.to))
                                    : ''
                            }
                        />
                    </div>
                </div>
                <button className="bg-black text-white rounded-lg px-4 py-2 my-auto">
                    Search
                </button>
            </div>
            {showDateRangePicker && (
                <div className="absolute mt-6 left-[57%] transform -translate-x-1/2 text-white z-10">
                    <DateRangeSelector />
                </div>
            )}
            {showLocationPicker && (
                <div className="absolute mt-1 left-[18%] transform -translate-x-1/2 text-white z-10">
                    <LocationPicker />
                </div>
            )}
        </div>
    );
}
