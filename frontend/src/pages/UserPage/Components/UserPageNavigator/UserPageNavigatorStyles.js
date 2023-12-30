import styled from 'styled-components';
import { Theme } from '../../../../modules/ui/Theme/theme';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-bottom: 0.5px solid ${Theme.color.gray50};
`;

export const Section = styled.div`
    color: ${(props) => (props.isselected === true ? 'black' : Theme.color.gray50)};
    padding: 0px ${Theme.spacing(2)};
    border-bottom: ${(props) =>
        props.isselected === true ? '1px solid black' : 'none'};
    cursor: pointer;
`;
