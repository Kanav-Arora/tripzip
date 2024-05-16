import React, { useState } from 'react';
import Heading from '../../../modules/ui/Heading';
import Title from '../../../modules/ui/Title';
import './Page1.css';
import { backendOrigin } from '../../../frontend.config';
import { useAddTrip } from '../useAddTrip';
import axios from 'axios';

export default function Page1(props) {
    const { updateLocation, updateDescription, getAddTripState } = useAddTrip();
    const [suggestions, setSuggestions] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    const inputValueHandler = async (e) => {
        const inputLocation = e.target.value;
        updateLocation(inputLocation);
        if (inputLocation.trim() === '') {
            setSelectedLocation('');
        } else {
            try {
                const response = await axios.get(backendOrigin + '/locations', {
                    params: {
                        location: inputLocation,
                    },
                });
                setSuggestions(response.data.address);
            } catch (error) {
                console.error('Error fetching location suggestions:', error);
            }
        }
    };

    const selectLocation = (location) => {
        setSelectedLocation(location.label);
        updateLocation(location.label);
        setSuggestions([]);
    };

    const textAreaValueHandler = (e) => {
        updateDescription(e.target.value);
    };

    return (
        <div className="flex flex-col h-full">
            <Title
                text="Create a trip"
                isBold
                fontSize={'1.25rem'}
                classname="mb-8"
            />
            <Heading text="Location" className="mb-2 font-medium" />
            <div className="flex flex-row justify-between">
                <input
                    type="text"
                    className="w-2/4 border border-gray-300 p-2 rounded-md mb-8 text-sm location-input"
                    value={selectedLocation || getAddTripState.location} // Use selected location if available
                    onChange={inputValueHandler}
                    placeholder="Delhi"
                />
                <div>
                    <input
                        type="text"
                        placeholder="From date"
                        className="min-w-[150px] border border-gray-300 p-2 rounded-md text-sm location-input mx-2"
                        readOnly
                    />
                    -
                    <input
                        type="text"
                        placeholder="To date"
                        className="min-w-[150px] border border-gray-300 p-2 rounded-md text-sm location-input mx-2"
                        readOnly
                    />
                </div>
            </div>
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((location, index) => (
                        <li key={index} onClick={() => selectLocation(location)}>{location.label}</li>
                    ))}
                </ul>
            )}
            <Heading
                text="Description"
                className="font-medium mb-2"
                subText="- Optional"
                subTextStyle="text-gray-400"
            />
            <div className="flex-1  relative w-full rounded-md overflow-hidden description-input">
                <textarea
                    className="w-full h-full p-2 resize-none outline-none text-sm overflow-y-scroll"
                    style={{ resize: 'none' }}
                    value={getAddTripState.description}
                    onChange={textAreaValueHandler}
                />
            </div>
        </div>
    );
}
