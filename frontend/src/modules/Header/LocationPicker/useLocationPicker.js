import { showLocationPickerState } from './States/showLocationPickerState';
import { searchLocationState } from './States/searchLocationState';
import { useRecoilState, useRecoilValue } from 'recoil';

export const useLocationPicker = () => {
    const [, setLocationPickerVisibility] = useRecoilState(
        showLocationPickerState
    );
    const isLocationPickerVisible = useRecoilValue(showLocationPickerState);

    const [, setSearchLocation] = useRecoilState(searchLocationState);
    const searchLocation = useRecoilValue(searchLocationState);

    const openLocationPicker = () => {
        setLocationPickerVisibility(true);
    };

    const closeLocationPicker = () => {
        setLocationPickerVisibility(false);
    };

    const toggleLocationPicker = () => {
        setLocationPickerVisibility(!isLocationPickerVisible);
    };

    const onFieldTyping = (value) => {
        setSearchLocation({ typing: true, search: value });

        if (onFieldTyping.timer) {
            clearTimeout(onFieldTyping.timer);
        }

        onFieldTyping.timer = setTimeout(() => {
            setSearchLocation({ typing: false, search: value });
        }, 1500);
    };

    return {
        isLocationPickerVisible,
        openLocationPicker,
        closeLocationPicker,
        toggleLocationPicker,
        onFieldTyping,
        searchLocation,
        setSearchLocation,
    };
};
