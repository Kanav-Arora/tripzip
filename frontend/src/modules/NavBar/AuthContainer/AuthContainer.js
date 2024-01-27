import Dropdown from '../Dropdown/Dropdown';
import AddTripButton from '../../AddTrip/AddTripButton';
import styled from 'styled-components';
import { Theme } from '../../ui/Theme/theme';
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: ${Theme.spacing(4)};
`;

export default function AuthContainer({ authName, image, isDark }) {
    return (
        <Container>
            <AddTripButton isDark={isDark} />
            <Dropdown name={authName} isDark={isDark} image={image} />
        </Container>
    );
}
