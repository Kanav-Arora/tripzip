import React, { useEffect, useState } from 'react';
import SectionLayout from '../../modules/Home/SectionLayout';
import axios from 'axios';
import { backendOrigin } from '../../frontend.config.js';
import TripCard from '../../modules/TripResults/TripCard.js';
import SkeletonCard from '../../modules/TripResults/SkeletonCard.js';
import { TripContainer } from './Styles/SectionCStyles.js';
import { useNavigate } from 'react-router-dom';

export default function SectionC() {
    const [loading, setLoading] = useState(false);
    const [trending, setTrending] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const instance = axios.create({
            withCredentials: true,
            baseURL: backendOrigin,
        });
        const fetchTrending = async () => {
            try {
                const response = await instance.get('trips/trendingTrips');
                if (response.status === 200 || response.data.status === 200) {
                    setTrending(response.data.data);
                }
                if (response.status === 204 || response.data.status === 204) {
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        setLoading(true);
        fetchTrending();
    }, []);

    const exploreMoreClick = () => {
        navigate('/trips/search');
        window.location.reload();
    };

    return (
        <SectionLayout subheading={'Trending'} title={'Our Trending Trips'}>
            <div className="flex flex-col">
                <div className="py-10">
                    <div className="flex flex-col items-center space-y-10 laptop:space-y-0 laptop:flex-row laptop:justify-center laptop:items-stretch laptop:space-x-10  xlaptop:space-y-0  xlaptop:items-stretch xlaptop:flex-row xlaptop:justify-center xlaptop:space-x-10 ">
                        <TripContainer>
                            {loading ? (
                                <SkeletonCard cards={3} />
                            ) : trending.length === 0 ? (
                                <></>
                            ) : (
                                trending.map((trip, index) => {
                                    return <TripCard key={index} trip={trip} />;
                                })
                            )}
                        </TripContainer>
                    </div>
                </div>
                {trending.length > 0 ? (
                    <button
                        className='mx-auto bg-black text-white rounded-xl w-fit py-1 px-4'
                        onClick={exploreMoreClick}
                    >
                        Explore more
                    </button>
                ) : (
                    <></>
                )}
            </div>
        </SectionLayout>
    );
}
