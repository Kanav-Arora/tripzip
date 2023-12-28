import React from 'react';
import { Container, LocationItem } from './LocationPickerStyles';
import { useLocationPicker } from './useLocationPicker';
import NullSearch from './Components/NullSearch';
const location = [
    'Delhi',
    'Neywork',
    'Neywork',
    'Neywork',
    'Neywork',
    'Neywork',
    'Neywork',
    'Neywork',
    'Neywork',
    'Neywork',
];

export default function LocationPicker() {
    const { isLocationPickerVisible, searchLocation, setSearchLocation } =
        useLocationPicker();

    const locationItemClick = (loc) => {
        console.log('item clicked');
        setSearchLocation({ typing: false, search: loc });
    };

    return (
        isLocationPickerVisible && (
            <Container>
                {searchLocation.typing === false &&
                searchLocation.search !== '' ? (
                    location.map((loc) => {
                        return (
                            <LocationItem
                                onClick={() => locationItemClick(loc)}
                            >
                                {loc}
                            </LocationItem>
                        );
                    })
                ) : (
                    <NullSearch />
                )}
            </Container>
        )
    );
}
