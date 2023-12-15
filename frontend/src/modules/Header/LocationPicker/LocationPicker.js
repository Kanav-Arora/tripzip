import React from 'react';
import { Container, LocationItem } from './LocationPickerStyles';

const location = ['Delhi', 'Neywork'];

export default function LocationPicker() {
    return (
        <Container>
            {location.map((loc) => {
                return <LocationItem>{loc}</LocationItem>;
            })}
        </Container>
    );
}
