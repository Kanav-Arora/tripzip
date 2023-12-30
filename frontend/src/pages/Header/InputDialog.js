import React, { useState } from 'react';
import DateRangeSelector from '../../modules/ui/DateRangeSelector/DateRangeSelector';
import { useDateRangeSelector } from '../../modules/ui/DateRangeSelector/hooks/useDateRangeSelector';
import {
    LocationPinMini as LocationIcon,
    CalendarMini as CalendarIcon,
    CalendarFilledMini as CalendarFilledIcon,
} from '../../assets/ext-icon';
import { IconProvider } from '../../modules/ui/IconProvider/IconProvider';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import LocationPicker from '../../modules/ui/LocationPicker/LocationPicker';
import { useLocationPicker } from '../../modules/ui/LocationPicker/useLocationPicker';
import { InputDateRangeState } from '../../modules/ui/DateRangeSelector/states/InputDateRangeState';

export default function InputDialog() {
    const navigate = useNavigate();
    const { search } = useLocation();

    const params = new URLSearchParams(search);

    const locationParam = params.get('location');
    const fromDateParam = params.get('fromDate');
    const toDateParam = params.get('toDate');

    const [showDateRangePicker, toggleDateRangePicker] = useState(false);
    const { selectedRange, setSelectedRange } = useDateRangeSelector(InputDateRangeState);
    const {
        toggleLocationPicker,
        closeLocationPicker,
        onFieldTyping,
        searchLocation,
    } = useLocationPicker();

    const handleDateClick = () => {
        closeLocationPicker();
        toggleDateRangePicker(!showDateRangePicker);
    };

    const handleLocationFieldClick = () => {
        if (showDateRangePicker === true) {
            toggleDateRangePicker(false);
        }
        toggleLocationPicker();
    };

    const handleLocationInputChange = (event) => {
        const { value } = event.target;
        onFieldTyping(value);
    };

    function formatDateToYYYYMMDD(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const searchClickHandler = () => {
        let params = {};
        if (searchLocation.search !== '')
            params.location = searchLocation.search;
        if (selectedRange.from)
            params.fromDate = formatDateToYYYYMMDD(selectedRange.from);
        if (selectedRange.to)
            params.toDate = formatDateToYYYYMMDD(selectedRange.to);

        navigate(
            {
                pathname: '/trips/search',
                search: `?${createSearchParams(params)}`,
            },
        );
        window.location.reload();
    };

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
                        <IconProvider size={1} Icon={LocationIcon} />
                        <span>Location</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            className="pl-0.5 w-full min-w-[225px] outline-none focus:border-none"
                            defaultValue={locationParam}
                            onClick={handleLocationFieldClick}
                            onChange={handleLocationInputChange}
                        />
                    </div>
                </div>
                <div className="px-3 border-r border-gray-300 pl-5">
                    <div className="flex items-center space-x-2 leading-5 pb-2">
                        <IconProvider size={1} Icon={CalendarIcon} />
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
                        <IconProvider size={1} Icon={CalendarFilledIcon} />
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
                <button
                    className="bg-black text-white rounded-lg px-4 py-2 my-auto"
                    onClick={searchClickHandler}
                >
                    Search
                </button>
            </div>
            {showDateRangePicker && (
                <div className="absolute mt-6 left-[57%] transform -translate-x-1/2 text-white z-10">
                    <DateRangeSelector selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
                </div>
            )}
            {
                <div className="absolute mt-1 left-[18%] transform -translate-x-1/2 text-white z-10">
                    <LocationPicker />
                </div>
            }
        </div>
    );
}
