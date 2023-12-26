import React, { useEffect } from 'react';

import {
    CalendarMini as CalendarIcon,
    PersonMini as PersonIcon,
} from '../../assets/ext-icon';

import {
    StyledTripCard,
    StyledImageWrapper,
    StyledImage,
    StyledCardContent,
    StyledTitle,
    StyledMetaInfo,
    StyledInfoItem,
    StyledDescription,
    StyledSubTitle,
    StyledHeader,
} from './TripCardStyles';

import axios from 'axios';
import { backendOrigin } from '../../frontend.config';

import { useNavigate } from 'react-router-dom';
import UserAvatar from '../ui/UserAvatar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UserDetailsState } from './states/UserDetailsState';
import { IconProvider } from '../ui/IconProvider/IconProvider';

const TripCard = ({ trip }) => {
    const navigate = useNavigate();
    const onCardClickHandler = () => {
        navigate(`/trips/${trip._id}`);
    };

    const onUserClickHandler = (event) => {
        event.stopPropagation();
        navigate(`/account/${trip.createdBy}`);
    };

    const [, setUserDetails] = useRecoilState(UserDetailsState);
    const userDetails = useRecoilValue(UserDetailsState);

    useEffect(() => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const fetchUserDetail = async () => {
            const response = await instance.get(
                `/users/userdata/${trip.createdBy}`
            );
            if (response.status === 200) {
                setUserDetails(response.data.data);
            }
        };
        fetchUserDetail();
    }, []);

    return (
        <StyledTripCard key={trip.id} onClick={onCardClickHandler}>
            <StyledImageWrapper>
                <StyledImage
                    src={
                        'https://cdn.britannica.com/65/162465-050-9CDA9BC9/Alps-Switzerland.jpg'
                    }
                    alt="Trending image"
                />
            </StyledImageWrapper>
            <StyledCardContent>
                <StyledHeader>
                    <div>
                        <StyledTitle>{trip.tripDetails.title}</StyledTitle>
                        <StyledSubTitle>
                            {trip.tripDetails.city +
                                ', ' +
                                trip.tripDetails.state}
                        </StyledSubTitle>
                    </div>
                    {userDetails && (
                        <UserAvatar
                            letter={userDetails.name}
                            size={1.75}
                            image="/images/src/kanav.webp"
                            onClick={onUserClickHandler}
                        />
                    )}
                </StyledHeader>
                <StyledMetaInfo>
                    <StyledInfoItem>
                        <IconProvider size={1} Icon={CalendarIcon} />
                        {Math.ceil((new Date(trip.tripDetails.endDate) -
                            new Date(trip.tripDetails.startDate)) /
                            (1000 * 60 * 60 * 24))}{' '}
                        Days
                    </StyledInfoItem>
                    <StyledInfoItem>
                        <IconProvider size={1} Icon={PersonIcon} />
                        {`${trip.peopleGoing.length}` +
                            (trip.groupSize !== -1
                                ? `/${trip.groupSize}`
                                : ``)}{' '}
                        Going
                    </StyledInfoItem>
                </StyledMetaInfo>
                <StyledDescription>
                    {trip.tripDetails.description}
                </StyledDescription>
            </StyledCardContent>
        </StyledTripCard>
    );
};

export default TripCard;
