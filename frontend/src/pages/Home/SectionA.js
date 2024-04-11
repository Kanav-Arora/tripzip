import React from 'react';
import SectionLayout from '../../modules/Home/SectionLayout';
import { useNavigate, createSearchParams } from 'react-router-dom';

export default function SectionA() {
    let data = [
        {
            place: 'Switzerland',
            url: '/images/switzerland.jpg',
        },
        {
            place: 'Greece',
            url: '/images/greece.jpg',
        },
        {
            place: 'Ooty',
            url: '/images/ooty.jpg',
        },
        {
            place: 'Switzerland',
            url: '/images/switzerland2.jpg',
        },
    ];

    const constants = {
        subheading: 'Sightseeing Tours',
        title: 'Europe Sightseeing Views',
        description:
            "Europe's enchanting beauty is an unrivaled blend of natural beauty and cultural richness",
    };

    const navigate = useNavigate();

    const onImageClick = (location) => {
        let params = {};
        params.location = location;

        navigate({
            pathname: '/trips/search',
            search: `?${createSearchParams(params)}`,
        });
        window.location.reload();
    };

    return (
        <SectionLayout
            subheading={constants.subheading}
            title={constants.title}
            description={constants.description}
        >
            <div className="flex flex-col gap-y-4 z-0">
                <div className="flex flex-row gap-x-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="w-3/5 h-[250px] shadow-xl relative overflow-hidden rounded-2xl cursor-pointer"
                            onClick={() => onImageClick(item.place)}
                        >
                            <img
                                className="w-full"
                                src={item.url}
                                alt={item.place}
                                loading="lazy" // Apply lazy loading
                            />
                            <div className="absolute bottom-0 left-0 p-4 text-white font-bold">
                                {item.place}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionLayout>
    );
}
