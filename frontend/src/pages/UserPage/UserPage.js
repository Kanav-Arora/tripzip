import React, { useEffect, useState } from 'react';
import { Container, IsEmpty, Wrappper } from './UserPageStyles';
import UserPageHeader from './Components/UserPageHeader/UserPageHeader';
import UserPageNavigator from './Components/UserPageNavigator/UserPageNavigator';
import axios from 'axios';
import { backendOrigin } from '../../frontend.config';
import { useParams } from 'react-router-dom';
import TripCard from '../../modules/TripResults/TripCard'
import SkeletonCard from '../../modules/TripResults/SkeletonCard'
import LocationNavbar from '../../modules/Trip/LocationNavbar/LocationNavbar';
const Sections = ['Ongoing', 'Completed', 'Interested'];

export default function UserPage() {
    const { uid } = useParams();
    const [selectedSection, setSelectedSection] = useState('Ongoing');
    const [isLoading, setLoading] = useState(false);
    const [trips, setTrips] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const fetchUser = async () => {
            const response = await instance.get(`/users/userdata/${uid}`);
            setUser(response.data.data);
        }
        fetchUser();
    }, [uid])

    useEffect(() => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const fetchTrips = async () => {
            let path = '';
            switch (selectedSection) {
                case 'Ongoing': path = `/account/${uid}/trips/ongoing`; break;
                case 'Interested': path = `/account/${uid}/trips/interested`; break;
                case 'Completed': path = `/account/${uid}/trips/completed`; break;
                default: path = `/account/${uid}/trips/ongoing`;
            }
            const response = await instance.get(path);
            setLoading(false);
            setTrips(response.data.data);
        }
        setLoading(true);
        fetchTrips();
    }, [selectedSection]);

    return (
        <>
            <LocationNavbar />
            <Wrappper>
                <UserPageHeader
                    image="/images/fallback/kanav.jpeg"
                    name={user ? user.name : ""}
                    email={user ? user.email : ""}
                />
                <UserPageNavigator
                    sections={Sections}
                    selected={selectedSection}
                    onSelect={setSelectedSection}
                />
                {isLoading ?
                    <Container>
                        <SkeletonCard cards={3} />
                    </Container>
                    :
                    trips.length > 0 ?
                        <Container>
                            {trips.map((trip, index) => {
                                return (
                                    <TripCard trip={trip} key={trip._id} />
                                );
                            })}
                        </Container>
                        :
                        <IsEmpty>No trip found</IsEmpty>
                }
            </Wrappper>
        </>

    );
}
