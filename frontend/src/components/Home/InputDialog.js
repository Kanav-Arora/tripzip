import React from 'react'
import { LocationPinMini as LocationIcon, CalendarMini as CalendarIcon, CalendarFilledMini as CalendarFilledIcon } from '../../assets/ext-icon'


export default function InputDialog() {
    return (
        <div className='mobile:hidden absolute rounded-xl bottom-0 mb-10 left-1/2 transform -translate-x-1/2 w-fit'>
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
                        />
                    </div>
                </div>
                <button className="bg-black text-white rounded-lg px-4 py-2 my-auto">Search</button>
            </div>
        </div>

    )
}
