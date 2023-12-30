import React from 'react';
import styled from 'styled-components';
import { WriteMini } from '../../assets/ext-icon';
import { useAddTrip } from '../../pages/Add Trip/useAddTrip';
import { IconProvider } from '../ui/IconProvider/IconProvider';

const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(isDark) => (isDark ? 'black' : 'white')};
`;

export default function AddTripButton({ isDark }) {
    const { openAddTripModal } = useAddTrip();

    const toggleAddTripModalHandler = () => {
        openAddTripModal();
    };

    return (
        <StyledButton onClick={toggleAddTripModalHandler} isDark={isDark}>
            <IconProvider Icon={WriteMini} size={1.5} color={isDark ? 'black' : 'white'} />
        </StyledButton>
    );
}
