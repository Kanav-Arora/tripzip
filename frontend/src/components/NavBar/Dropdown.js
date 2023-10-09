import React, { useContext, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/Auth/authContext'
import { backendOrigin } from '../../frontend.config';
import { ChevronDown, ChevronLeft } from '../../assets/ext-icon';
import { logoutAction } from '../../context/Auth/authAction'

export default function Dropdown({ name }) {
    const [open, setOpen] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const openDrop = () => {
        setOpen(!open);
    }
    const handleSignOut = async () => {
        try {
            const result = await axios.post(backendOrigin + '/users/signout')
            if (result.status === 200) {
                dispatch(logoutAction());
            } else {
                console.error('Unexpected status code:', result.status);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

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
                            <Link class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">My Trips</Link>
                            <Link class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">Setting</Link>
                            <button onClick={handleSignOut} class=" rounded-b text-left bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">Sign Out</button>
                        </div>
                    </div>
                }

            </div>
        </>
    );
}
