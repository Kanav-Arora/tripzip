import React, { useState } from "react";
import Modal from "../../../../modules/ui/Modal/Modal";

function addDaysAndFormat(inputDate, numberOfDays) {
    const date = new Date(inputDate);
    date.setDate(date.getDate() + numberOfDays);

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);

    return `${day} ${month}, ${year}`;
}

const ShowMoreModal = ({ description, itinerary, startDate,
    endDate }) => {
    return (
        <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col gap-y-2">
                <div className="text-lg font-bold">Description</div>
                <div className="text-sm leading-loose">{description}</div>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="text-lg font-bold">Itinerary</div>
                <div className="flex flex-col gap-y-6 my-4">
                    {
                        itinerary.map((dayItinerary, index) => {
                            const date = addDaysAndFormat(startDate, index);
                            return (
                                <div className="flex flex-col">
                                    <div className="text-sm text-gray-500 font-semibold">
                                        {date}
                                    </div>
                                    <div className="border-b border-gray-300 my-2"></div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm">
                                            {`Est: ${dayItinerary.amount ? '$' + dayItinerary.amount : '--'}`}
                                        </div>
                                        <div className="text-sm leading-loose">
                                            {dayItinerary.description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default function AboutTrip({ description, itinerary, startDate,
    endDate }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">About Trip</div>
            <div className="relative max-h-24 overflow-hidden leading-6">
                {description}
            </div>
            <button
                className="bg-matteBlack text-white px-4 py-1 block mx-auto rounded-md"
                onClick={handleOpenModal}
            >
                Show More
            </button>
            <Modal
                isVisible={isModalOpen}
                width="55%"
                height="90%"
                onClose={handleCloseModal}
                scroll={true}
            >
                <ShowMoreModal description={description} itinerary={itinerary} startDate={startDate}
                    endDate={endDate} />
            </Modal>
        </div>
    );
}
