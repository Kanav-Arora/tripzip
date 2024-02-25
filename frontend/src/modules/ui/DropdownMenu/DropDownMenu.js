import styled from 'styled-components';
import { Theme } from '../Theme/theme';

const CustomSelect = styled.div`
    display: inline-block;
    width: ${(props) => (props.width ? props.width : '100%')};
`;

const StyledSelect = styled.select`
    outline: none !important;
    border: 1px solid ${Theme.color.gray40};
    border-radius: ${Theme.border.radius.xl};
    padding: ${Theme.spacing(1.5)} ${Theme.spacing(4)};
    width: 100%;
    appearance: none;
    background-color: white;
    cursor: pointer;
`;

export default function DropDownMenu({ title, options, value, onChange }) {
    return (
        <CustomSelect>
            <StyledSelect value={value} onChange={onChange}>
                <option key={null} value={null}>
                    {title}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </CustomSelect>
    );
}
