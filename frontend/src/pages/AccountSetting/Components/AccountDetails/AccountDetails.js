import React, { useState } from 'react';
import {
    FormContainer,
    FormField,
    FieldTitle,
    InputField,
    TextAreaField,
    FieldFlexRowContainer,
} from './AccountDetailsStyles';
import { useRecoilState } from 'recoil';
import DropDownMenu from '../../../../modules/ui/DropdownMenu/DropDownMenu';
import HobbyPicker from '../HobbyPicker/HobbyPicker';
import { DataUpdateState } from '../../states/DataUpdateState';

export default function AccountDetails() {
    const [dataUpdatedState, setDataUpdatedState] =
        useRecoilState(DataUpdateState);
    const GenderOptions = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Other', label: 'Other' },
    ];
    const [selectedGender, setSelectedGender] = useState(
        dataUpdatedState.gender ?? null
    );

    const genderChangeHandler = (value) => {
        setSelectedGender(value);
        handleFieldChange('gender', value);
    };

    const handleFieldChange = (field, value) => {
        setDataUpdatedState((prevFormState) => ({
            ...prevFormState,
            [field]: value,
        }));
    };

    return (
        <FormContainer>
            <FieldFlexRowContainer>
                <FormField>
                    <FieldTitle>Name</FieldTitle>
                    <InputField
                        type="text"
                        defaultValue={dataUpdatedState.name}
                        onChange={(e) =>
                            handleFieldChange('name', e.target.value)
                        }
                    />
                </FormField>
                <FormField>
                    <FieldTitle>Age</FieldTitle>
                    <InputField
                        type="number"
                        defaultValue={dataUpdatedState.age}
                        onChange={(e) =>
                            handleFieldChange('age', e.target.value)
                        }
                    />
                </FormField>
                <FormField>
                    <FieldTitle>Gender</FieldTitle>
                    <DropDownMenu
                        options={GenderOptions}
                        value={selectedGender}
                        onChange={(e) => genderChangeHandler(e.target.value)}
                        title="Select Gender"
                    />
                </FormField>
            </FieldFlexRowContainer>
            <FormField>
                <FieldTitle>About</FieldTitle>
                <TextAreaField
                    rows="4"
                    defaultValue={dataUpdatedState.about}
                    onChange={(e) => handleFieldChange('about', e.target.value)}
                />
            </FormField>
            <FormField>
                <FieldTitle>Address</FieldTitle>
                <InputField
                    type="text"
                    defaultValue={dataUpdatedState.address}
                    onChange={(e) =>
                        handleFieldChange('address', e.target.value)
                    }
                />
            </FormField>
            <FieldFlexRowContainer>
                <FormField>
                    <FieldTitle>City</FieldTitle>
                    <InputField
                        type="text"
                        defaultValue={dataUpdatedState.city}
                        onChange={(e) =>
                            handleFieldChange('city', e.target.value)
                        }
                    />
                </FormField>
                <FormField>
                    <FieldTitle>State</FieldTitle>
                    <InputField
                        type="text"
                        defaultValue={dataUpdatedState.state}
                        onChange={(e) =>
                            handleFieldChange('state', e.target.value)
                        }
                    />
                </FormField>
                <FormField>
                    <FieldTitle>Country</FieldTitle>
                    <InputField
                        type="text"
                        defaultValue={dataUpdatedState.country}
                        onChange={(e) =>
                            handleFieldChange('country', e.target.value)
                        }
                    />
                </FormField>
            </FieldFlexRowContainer>
            <FieldFlexRowContainer>
                <FormField width="67%">
                    <FieldTitle>Birth Place</FieldTitle>
                    <InputField
                        type="text"
                        defaultValue={dataUpdatedState.birth_place}
                        onChange={(e) =>
                            handleFieldChange('birth_place', e.target.value)
                        }
                    />
                </FormField>
                <FormField width="31%">
                    <FieldTitle>Pincode</FieldTitle>
                    <InputField
                        type="text"
                        defaultValue={dataUpdatedState.pincode}
                        onChange={(e) =>
                            handleFieldChange('pincode', e.target.value)
                        }
                    />
                </FormField>
            </FieldFlexRowContainer>
            <FormField>
                <FieldTitle>Hobbies</FieldTitle>
                <HobbyPicker />
            </FormField>
        </FormContainer>
    );
}
