import React from 'react';
import {
    Container,
    InputWrapper,
    InputSection,
    SearchButton,
    InputField,
    Divider,
    InputFieldContainer,
    InputFieldHeading,
    LocationPickerContainer,
    Wrapper,
    DateRangePicker,
} from './LocationNavbarInputStyles';
import { useDateRangeSelector } from '../../../ui/DateRangeSelector/hooks/useDateRangeSelector';
import {
    MagnifyingIcon,
    LocationPinMini as LocationIcon,
    CalendarMini as CalendarIcon,
    CalendarFilledMini as CalendarFilledIcon,
} from '../../../../assets/ext-icon';
import { IconProvider } from '../../../ui/IconProvider/IconProvider';
import { isNavbarScopedState } from '../States/isNavbarScopedState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLocationPicker } from '../../../Header/LocationPicker/useLocationPicker';
import LocationPicker from '../../../Header/LocationPicker/LocationPicker';
import DateRangeSelector from '../../../ui/DateRangeSelector/DateRangeSelector';
import { useNavigate, createSearchParams } from 'react-router-dom';

export default function LocationNavbarInput() {
    const [, setNavbarScope] = useRecoilState(isNavbarScopedState);
    const isNavbarScoped = useRecoilValue(isNavbarScopedState);
    const { isLocationPickerVisible } = useLocationPicker();
    const navigate = useNavigate();
    const {
        toggleLocationPicker,
        closeLocationPicker,
        onFieldTyping,
        searchLocation,
    } = useLocationPicker();

    const {
        closeDateRangeSelector,
        toggleDateRangeSelector,
        isDateRangeSelectorVisible,
    } = useDateRangeSelector();

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    const handleDateClick = () => {
        closeLocationPicker();
        toggleDateRangeSelector();
        setNavbarScope(true);
        scrollToTop();
    };

    const handleLocationFieldClick = () => {
        closeDateRangeSelector();
        toggleLocationPicker();
        setNavbarScope(true);
        scrollToTop();
    };

    const handleLocationInputChange = (event) => {
        const { value } = event.target;
        onFieldTyping(value);
    };

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    function formatDateToYYYYMMDD(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const searchClickHandler = () => {
        let params = {};
        if (searchLocation.search !== '')
            params.location = searchLocation.search;
        if (selectedRange.from) params.fromDate = formatDateToYYYYMMDD(selectedRange.from);
        if (selectedRange.to) params.toDate = formatDateToYYYYMMDD(selectedRange.to);

        navigate({
            pathname: '/trips/search',
            search: `?${createSearchParams(params)}`,
        }, { replace: true, state: { key: Date.now() } });
        window.location.reload();
    }

    const { selectedRange } = useDateRangeSelector();

    return (
        <Wrapper>
            <Container>
                <InputWrapper>
                    <InputSection>
                        <InputFieldContainer>
                            {isNavbarScoped && (
                                <InputFieldHeading
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <IconProvider
                                        size={1}
                                        Icon={LocationIcon}
                                    />

                                    <span>Location</span>
                                </InputFieldHeading>
                            )}
                            <InputField
                                type="text"
                                placeholder="Where do you want to go?"
                                minW="12.5rem"
                                defaultValue={searchLocation.search}
                                onClick={handleLocationFieldClick}
                                onChange={handleLocationInputChange}
                            />
                        </InputFieldContainer>

                        <Divider />
                        <InputFieldContainer>
                            {isNavbarScoped && (
                                <InputFieldHeading
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <IconProvider
                                        size={1}
                                        Icon={CalendarIcon}
                                    />
                                    <span>From Date</span>
                                </InputFieldHeading>
                            )}
                            <InputField
                                type="text"
                                placeholder="Select a date"
                                readOnly
                                onClick={handleDateClick}
                                minW="8rem"
                                value={
                                    selectedRange.from
                                        ? formatDate(
                                            new Date(selectedRange.from)
                                        )
                                        : ''
                                }
                            />
                        </InputFieldContainer>

                        <Divider />
                        <InputFieldContainer>
                            {isNavbarScoped && (
                                <InputFieldHeading
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <IconProvider
                                        size={1}
                                        Icon={CalendarFilledIcon}
                                    />
                                    <span>To Date</span>
                                </InputFieldHeading>
                            )}
                            <input
                                type="text"
                                placeholder="Select a date"
                                readOnly
                                onClick={handleDateClick}
                                minW="8rem"
                                value={
                                    selectedRange.to
                                        ? formatDate(new Date(selectedRange.to))
                                        : ''
                                }
                            />
                        </InputFieldContainer>
                    </InputSection>

                    <SearchButton onClick={searchClickHandler}>
                        <IconProvider Icon={MagnifyingIcon} size={1.25} />
                    </SearchButton>
                </InputWrapper>
            </Container>
            {isNavbarScoped && isLocationPickerVisible && (
                <LocationPickerContainer>
                    <LocationPicker />
                </LocationPickerContainer>
            )}
            {isNavbarScoped && isDateRangeSelectorVisible && (
                <DateRangePicker>
                    <DateRangeSelector />
                </DateRangePicker>
            )}
        </Wrapper>
    );
}
