import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { backendOrigin } from '../../frontend.config';
import TripCard from '../../modules/TripResults/TripCard';
import { WriteMini } from '../../assets/ext-icon'
import {
    Container,
    Wrapper,
    StyledLoadButton,
    StyledButtonWrapper,
    Content,
    IsEmpty,
    PaddedSection,
    BorderedButton
} from './TripResultsStyles';
import SkeletonCard from '../../modules/TripResults/SkeletonCard';
import { IconProvider } from '../../modules/ui/IconProvider/IconProvider';
import { useAddTrip } from '../Add Trip/useAddTrip';

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

    const { openAddTripModal } = useAddTrip();

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
                console.log(countResults);
                if (countResults.status === 200 || countResults.data.status === 200) {
                    setTripCount(countResults.data.data.tripsCount);
                    await fetchTripsHandler();
                }
                if (countResults.status === 204 || countResults.data.status === 204) {
                    setTripCount(0);
                    setLoadingStatus({ ...loadingStatus, loading: false });
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
        <PaddedSection>
            {
                loadingStatus.loading === true
                    ?
                    <Content>
                        <Wrapper>
                            <Container>
                                <SkeletonCard cards={9} />
                            </Container>
                        </Wrapper>
                    </Content>
                    :
                    (
                        tripCount === 0
                            ?
                            <Content>
                                <IsEmpty>Sorry :) Unable to find a match<br />Don't be sad, you can create a new trip</IsEmpty>
                                <BorderedButton onClick={() => openAddTripModal()}>
                                    <IconProvider Icon={WriteMini} size={1.25} />
                                    <div>
                                        Create Trip
                                    </div>
                                </BorderedButton>
                            </Content>
                            :
                            <Content>
                                <Wrapper>
                                    <Container>
                                        {tripResults.map((trip) => {
                                            return <TripCard key={trip._id} trip={trip} />;
                                        })}
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
                    )
            }
        </PaddedSection>

    );
}
