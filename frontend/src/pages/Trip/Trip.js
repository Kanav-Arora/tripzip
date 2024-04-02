/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { backendOrigin } from '../../frontend.config';
import TripHeader from './components/TripHeader';
import TripBody from './components/TripBody/TripBody';

import { useAuth } from '../../context/Auth/useAuth';

import TripImage from './components/TripBody/TripImage';
import SectionContainer from './styles/SectionContainer';

import { useNavigate } from 'react-router-dom';
import LocationNavbar from '../../modules/Trip/LocationNavbar/LocationNavbar';
import styled from 'styled-components';
import { Theme } from '../../modules/ui/Theme/theme';
import { useIsMobile } from '../../modules/ui/hooks/useIsMobile';

const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${(props) => (props.isMobile ? '90%' : '70%')};
    gap: ${Theme.spacing(2)};
`;

export default function Trip() {
    const { tripID } = useParams();
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin,
    });
    const navigate = useNavigate();

    const { authStateValue } = useAuth();
    const authUID = authStateValue.uid;

    const [tripData, setTripData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tripResponse = await instance.get(`/trips/${tripID}`);
                setTripData(tripResponse.data.data);

                if (
                    tripResponse.data.data &&
                    tripResponse.data.data.createdBy
                ) {
                    const userDetailResponse = await instance.get(
                        `/users/userdata/${tripResponse.data.data.createdBy}`
                    );
                    setUserData(userDetailResponse.data.data);
                }
            } catch (error) {
                console.error('Error fetching trip data:', error);
                if (error.response.status === 404) {
                    navigate('*');
                }
            }
        };

        fetchData();
    }, []);

    const image =
        'https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/master/pass/GettyImages-946087016.jpg';
    const isMobile = useIsMobile();
    return (
        <>
            <LocationNavbar />
            <StyledWrapper>
                {tripData !== null && userData !== null ? (
                    <StyledContainer isMobile={isMobile}>
                        <TripHeader
                            title={tripData.tripDetails.title}
                            city={tripData.tripDetails.city}
                            state={tripData.tripDetails.state}
                            maxSize={tripData.groupSize}
                            isInterested={tripData.tripsInterested.includes(
                                authUID
                            )}
                            peopleGoing={tripData.peopleGoing}
                        />
                        <SectionContainer>
                            <TripImage image={image} />
                        </SectionContainer>
                        <TripBody tripData={tripData} userData={userData} authUID={authUID} />
                    </StyledContainer>
                ) : (
                    <div></div>
                )}
            </StyledWrapper>
        </>
    );
}
