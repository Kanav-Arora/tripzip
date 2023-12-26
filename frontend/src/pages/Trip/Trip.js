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
                        `/account/${tripResponse.data.data.createdBy}`
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

    return (
        <>
            <LocationNavbar />
            <div className="mx-40">
                {tripData !== null && userData !== null ? (
                    <div className="flex flex-col gap-y-2">
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
                        <TripBody tripData={tripData} userData={userData} />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}
