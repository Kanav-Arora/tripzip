import styled from 'styled-components';
import { IconProvider } from '../../IconProvider/IconProvider';
import { LoaderDots } from '../../../../assets/ext-icon';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default function NullSearch() {
    return (
        <Container>
            <IconProvider Icon={LoaderDots} size={4} />
        </Container>
    );
}
