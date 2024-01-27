import React, { useState } from 'react';
import {
    InputField,
    HobbyTag,
    RemoveTagButton,
    StyledWrapper,
    StyledContent,
    StyledCharCount,
} from './HobbyPickerStyles';
import { useRecoilState } from 'recoil';
import { DataUpdateState } from '../../states/DataUpdateState';

export default function HobbyPicker() {
    const [dataUpdatedState, setDataUpdatedState] =
        useRecoilState(DataUpdateState);
    const [currentHobby, setCurrentHobby] = useState('');

    const handleInputChange = (e) => {
        setCurrentHobby(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && currentHobby.trim() !== '') {
            e.preventDefault();
            addHobby(currentHobby.trim());
            setCurrentHobby('');
        }
    };

    const addHobby = (newHobby) => {
        if (newHobby !== '' && newHobby.length <= 10) {
            const capitalizedHobby =
                newHobby.charAt(0).toUpperCase() + newHobby.slice(1);
            const newHobbies = [...dataUpdatedState.hobbies, capitalizedHobby];
            setDataUpdatedState((prevFormState) => ({
                ...prevFormState,
                hobbies: newHobbies,
            }));
        }
    };

    const removeHobby = (index) => {
        const newHobbies = [...dataUpdatedState.hobbies];
        newHobbies.splice(index, 1);
        setDataUpdatedState((prevFormState) => ({
            ...prevFormState,
            hobbies: newHobbies,
        }));
    };

    return (
        <StyledWrapper>
            <InputField
                disabled={dataUpdatedState.hobbies.length === 5}
                value={currentHobby}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a hobby and press enter to add"
            />
            <StyledContent>
                <div>
                    {dataUpdatedState.hobbies.map((hobby, index) => (
                        <HobbyTag key={index}>
                            {hobby}
                            <RemoveTagButton onClick={() => removeHobby(index)}>
                                ×
                            </RemoveTagButton>
                        </HobbyTag>
                    ))}
                </div>
                <StyledCharCount isRed={currentHobby.length > 10}>
                    {currentHobby.length}
                </StyledCharCount>
            </StyledContent>
        </StyledWrapper>
    );
}
