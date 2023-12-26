import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DropdownContainer, DropdownButton, DropdownList, DropdownItem } from './DropdownStyles';
import { backendOrigin } from '../../../frontend.config';
import { useAuth } from '../../../context/Auth/useAuth';

export default function Dropdown({ name, isDark }) {
    const [open, setOpen] = useState(false);
    const { logoutAuth } = useAuth();

    const openDrop = () => {
        setOpen(!open);
    };

    const handleSignOut = async () => {
        try {
            const result = await axios.post(backendOrigin + '/users/signout');
            if (result.status === 200) {
                logoutAuth();
            } else {
                console.error('Unexpected status code:', result.status);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DropdownContainer>
            <div>
                <div id="dropdown">
                    <DropdownButton isDark={isDark} onClick={openDrop}>
                        {name[0]}
                    </DropdownButton>
                    {open && (
                        <DropdownList>
                            <DropdownItem as={Link} to="/my-trips">
                                My Trips
                            </DropdownItem>
                            <DropdownItem>Setting</DropdownItem>
                            <DropdownItem onClick={handleSignOut}>Sign Out</DropdownItem>
                        </DropdownList>
                    )}
                </div>
            </div>
        </DropdownContainer>
    );
}
