import React, { useState } from 'react';
import { ChevronDown, ChevronLeft } from '../../assets/ext-icon';

export default function Dropdown({ name }) {
    const [open, setOpen] = useState(false);
    const openDrop = () => {
        setOpen(!open);
    }

    return (
        <>
            <div>
                <div id='dropdown' className="text-white">
                    <div className="flex items-center">
                        <button class="m-1 mr-2 w-8 h-8 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
                            {name[0]}
                            {/* If image URL is available
                            <img src="http://source.unsplash.com/100x100/?girl" class="rounded-full" /> */}
                        </button>
                        <button onClick={openDrop} className='flex items-center'>
                            {name}
                            <div className="pl-2">
                                {
                                    open
                                        ?
                                        <ChevronLeft />

                                        :
                                        <ChevronDown />
                                }
                            </div>
                        </button>
                    </div>
                </div>
                {
                    open
                    &&
                    <div class="absolute text-gray-700 pt-1 right-10" style={{ width: document.getElementById("dropdown").offsetWidth }}>
                        <div className='flex flex-col'>
                            <a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">My Trips</a>
                            <a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">Setting</a>
                            <a class=" rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">Sign Out</a>
                        </div>
                    </div>
                }

            </div>
        </>
    );
}
