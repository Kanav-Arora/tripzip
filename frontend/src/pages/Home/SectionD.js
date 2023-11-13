import React, { useRef, useState, useEffect } from 'react';

import { RightIcon, LeftIcon } from '../../assets/ext-icon';

const Card = ({ title, imageSrc, onClick }) => {
    return (
        <div className="flex flex-col items-center text-center" onClick={onClick}>
            <div className="rounded-t-full overflow-hidden w-40">
                <img src={imageSrc} alt={title} className="w-40 h-40 object-cover" />
            </div>
            <div className="bg-white p-4 rounded-b-lg">
                <div className="text-black text-lg font-bold">{title}</div>
            </div>
        </div>
    );
};

export default function SectionD() {
    const containerRef = useRef(null);
    const [scrollable, setScrollable] = useState(false);

    const categories = [
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
        {
            title: "Mountains",
            image: "https://hips.hearstapps.com/hmg-prod/images/ama-dablam-mountain-peak-view-from-chola-pass-royalty-free-image-1623254695.jpg"
        },
    ];

    useEffect(() => {
        const container = containerRef.current;
        setScrollable(container.scrollWidth > container.clientWidth);
    }, []);

    const handleScroll = (scrollDirection) => {
        const container = containerRef.current;
        if (container && scrollable) {
            const scrollAmount = scrollDirection === 'right' ? container.clientWidth : -container.clientWidth;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const handleCardClick = (title) => {
        console.log(`Clicked on ${title}`);
    };

    return (
        <div className="my-28 mx-40 flex flex-col z-0 overflow-hidden">
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col gap-y-4">
                        <div className="text-black text-4xl font-bold">Categories</div>
                        <div className="text-gray-500 text-sm">
                            Much destinations here but don't be confused; it's already grouped by categories
                        </div>
                    </div>
                    <div className="flex flex-row h-fit gap-x-2">
                        <button
                            className={`rounded-full border p-2 shadow-md ${!scrollable ? 'bg-gray-800 cursor-not-allowed' : ''}`}
                            onClick={() => handleScroll('left')}
                            disabled={!scrollable}
                        >
                            <LeftIcon />
                        </button>
                        <button
                            className={`rounded-full border p-2 shadow-md ${!scrollable ? 'bg-gray-800 cursor-not-allowed' : ''}`}
                            onClick={() => handleScroll('right')}
                            disabled={!scrollable}
                        >
                            <RightIcon />
                        </button>
                    </div>
                </div>
                <div
                    ref={containerRef}
                    className="flex flex-row space-x-4 py-4 mt-4 overflow-hidden"
                >
                    {categories.map((category, index) => (
                        <Card
                            key={index}
                            title={category.title}
                            imageSrc={category.image}
                            onClick={() => handleCardClick(category.title)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
