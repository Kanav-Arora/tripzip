import React, { useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/Auth/authContext';
import { backendOrigin } from '../../frontend.config';
import { logoutAction } from '../../context/Auth/authAction';

export default function Dropdown({ name }) {
    const [open, setOpen] = useState(false);
    const { authDispatch } = useAuth();
    const openDrop = () => {
        setOpen(!open);
    };
    const handleSignOut = async () => {
        try {
            const result = await axios.post(backendOrigin + '/users/signout');
            if (result.status === 200) {
                authDispatch(logoutAction());
            } else {
                console.error('Unexpected status code:', result.status);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <div id="dropdown" className="text-white">
                    <div className="flex items-center">
                        <button
                            onClick={openDrop}
                            class="w-8 h-8 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white"
                        >
                            {name[0]}
                        </button>
                    </div>
                    {open && (
                        <div class="absolute text-gray-700 pt-1 right-5">
                            <div className="flex flex-col w-fit py-2">
                                <Link class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">
                                    My Trips
                                </Link>
                                <Link class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">
                                    Setting
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    class=" rounded-b text-left bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap text-sm"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
