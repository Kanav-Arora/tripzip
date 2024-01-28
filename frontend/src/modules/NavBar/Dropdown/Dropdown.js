import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    DropdownContainer,
    DropdownList,
    DropdownItem,
} from './DropdownStyles';
import { backendOrigin } from '../../../frontend.config';
import { useAuth } from '../../../context/Auth/useAuth';
import UserAvatar from '../../../modules/ui/UserAvatar'
import { Theme } from '../../ui/Theme/theme';

export default function Dropdown({ isDark }) {
    const [open, setOpen] = useState(false);
    const { logoutAuth, authStateValue } = useAuth();

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
    console.log(authStateValue);
    return (
        <DropdownContainer>
            <div>
                <div id="dropdown">
                    <UserAvatar image={authStateValue.image} letter={authStateValue.name} onClick={openDrop} size={2} backgroundColor={isDark ? Theme.color.matteBlack : Theme.color.gray60} />
                    {open && (
                        <DropdownList>
                            <DropdownItem
                                as={Link}
                                to={`/account/${authStateValue.uid}`}
                            >
                                My Trips
                            </DropdownItem>
                            <DropdownItem as={Link}
                                to={`/settings`}>Setting</DropdownItem>
                            <DropdownItem onClick={handleSignOut}>
                                Sign Out
                            </DropdownItem>
                        </DropdownList>
                    )}
                </div>
            </div>
        </DropdownContainer>
    );
}
