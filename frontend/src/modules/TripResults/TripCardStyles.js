import styled from 'styled-components';
import { Theme } from '../ui/Theme/theme';

const StyledTripCard = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    margin-bottom: 1rem;
    width: 350px;
    height: 350px;
`;

const StyledImageWrapper = styled.div`
    position: relative;
    height: 150px;
    overflow: hidden;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    margin-bottom: 0.5rem;
`;

const StyledImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledCardContent = styled.div`
    text-align: left;
    padding: ${Theme.spacing(2)};
    padding-bottom: ${Theme.spacing(3)};
    height: max-content;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${Theme.spacing(4)};
`;

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const StyledTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

const StyledSubTitle = styled.div`
    font-size: 0.75rem;
    color: ${Theme.color.gray50};
`;

const StyledMetaInfo = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`;

const StyledInfoItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    font-size: 0.875rem;
    color: #4b5563;
    align-items: center;
`;

const StyledDescription = styled.p`
    color: #4b5563;
`;

export {
    StyledTripCard,
    StyledImageWrapper,
    StyledImage,
    StyledCardContent,
    StyledHeader,
    StyledTitle,
    StyledSubTitle,
    StyledMetaInfo,
    StyledInfoItem,
    StyledDescription,
};
