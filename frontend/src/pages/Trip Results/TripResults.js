import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { backendOrigin } from '../../frontend.config';
import TripCard from '../../modules/TripResults/TripCard';

import {
    Container,
    Wrapper,
    StyledLoadButton,
    StyledButtonWrapper,
    Content,
} from './TripResultsStyles';
import SkeletonCard from '../../modules/TripResults/SkeletonCard';

export default function TripResults() {
    const { search } = useLocation();

    const params = new URLSearchParams(search);

    const locationParam = params.get('location');
    const fromDateParam = params.get('fromDate');
    const toDateParam = params.get('toDate');
    const instance = axios.create({
        withCredentials: true,
        baseURL: backendOrigin,
    });

    const [tripResults, setTripResults] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState({
        loading: false,
        page: 1,
    });
    const [tripCount, setTripCount] = useState(0);

    const fetchTripsHandler = async () => {
        try {
            const response = await instance.get('/trips', {
                params: {
                    page: loadingStatus.page,
                    location: locationParam,
                    fromDate: toDateParam,
                    toDate: fromDateParam,
                },
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
                const newTrips = response.data.data.trips;
                const existingKeys = tripResults.map((trip) => trip._id);
                const filteredNewTrips = newTrips.filter(
                    (trip) => !existingKeys.includes(trip.key)
                );
                setTripResults([...tripResults, ...filteredNewTrips]);
                setLoadingStatus({
                    loading: false,
                    page: loadingStatus.page + 1,
                });
            }
        } catch (error) {
            console.error('Error fetching trip results:', error);
        }
    };

    useEffect(() => {
        const countResultsHandler = async () => {
            setLoadingStatus({ ...loadingStatus, loading: true });
            try {
                const countResults = await instance.get('/trips/results', {
                    params: {
                        location: locationParam,
                        fromDate: toDateParam,
                        toDate: fromDateParam,
                    },
                    headers: { 'Content-Type': 'application/json' },
                });
                if (countResults.status === 200) {
                    setTripCount(countResults.data.data.tripsCount);
                    await fetchTripsHandler();
                }
            } catch (error) {
                console.error('Error counting results:', error);
            }
        };
        countResultsHandler();
    }, []);

    const handleShowMore = async () => {
        await fetchTripsHandler();
    };

    return (
        <Content>
            <Wrapper>
                <Container id="trip-results-container">
                    {tripResults.map((trip) => {
                        return <TripCard key={trip._id} trip={trip} />;
                    })}
                    {loadingStatus.loading && (
                        <SkeletonCard cards={9} />
                    )}
                </Container>
            </Wrapper>
            {(tripResults.length ?? 0) < tripCount && tripCount !== 0 && (
                <StyledButtonWrapper>
                    {
                        <StyledLoadButton onClick={handleShowMore}>
                            Show more
                        </StyledLoadButton>
                    }
                </StyledButtonWrapper>
            )}
        </Content>
    );
}
